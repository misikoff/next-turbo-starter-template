/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA(
  withMDX({
    images: {
      domains: [],
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  })
)
