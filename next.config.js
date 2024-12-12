/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/<repository-name>' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
