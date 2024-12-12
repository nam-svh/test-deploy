/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/test-deploy',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: ['babel-loader', '@mdx-js/loader']
    });
    return config;
  }
}

module.exports = nextConfig
