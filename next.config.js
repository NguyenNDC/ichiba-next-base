/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
}

module.exports = nextConfig
