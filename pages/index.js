// ? NOTE - you can't import fs and path module on the client side, but if you use those modules in getStaticProps, Next.js will take care of that for you
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '@/components/Post'
import Head from 'next/head'
import { sortByDate } from '@/utils' // import from utils/index.js

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Next.js Blog - Home</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <div key={index}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  // files is an array of file names from the posts directory
  const files = fs.readdirSync(path.join('posts'))

  // Get the slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    // Remove the markdown body, returns only the frontmatter (assign it to frontmatter variable through destructuring)
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
