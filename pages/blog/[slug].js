/* eslint-disable @next/next/no-img-element */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import Link from 'next/link'

export default function PostPage({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) {
  return (
    <>
      <Head>
        <title>{slug}</title>
        {/* Note: You can also use title instead of slug */}
      </Head>
      <Link href='/' className='btn btn-back'>
        Go Back
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>

        <img src={cover_image} alt={title} />

        <div className='post-body'>
          {/* parse markdown with marked library (dangerouslySetInnerHTML is needed for it) */}
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
  )
}

export function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false, // if false, then any paths not returned by getStaticPaths will result in a 404 page
  }
}

export function getStaticProps({ params: { slug } }) {
  // Get the markdown file from the posts directory
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  // Get the frontmatter and content from the markdown file
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  }
}
