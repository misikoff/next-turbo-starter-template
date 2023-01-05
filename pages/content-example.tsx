import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'
import fs from 'fs'

import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
  const fileContents = fs.readFileSync('content/example.mdx', 'utf8')

  const { content, data } = matter(fileContents)
  const mdxSource = await serialize(content)

  return { props: { source: mdxSource } }
}

export default function Post({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div>
      <Head>
        <title>Example Content</title>
      </Head>
      <article className='prose mx-auto flex w-full max-w-3xl flex-col p-4'>
        <MDXRemote {...source} />
      </article>
    </div>
  )
}
