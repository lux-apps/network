/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/network',
  assetPrefix: '/network',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
