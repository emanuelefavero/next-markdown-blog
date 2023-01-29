/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className='btn'>
        Read More
      </Link>
    </div>
  )
}
