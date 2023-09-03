/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'JG27 KASM Registry',
    description: 'My list of Kasm workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://jacobgaming27.github.io/kasm-registry/',
    contactUrl: 'https://github.com/JacobGaming27/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
