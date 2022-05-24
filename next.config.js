/** @type {import('next').NextConfig} */
const nextConfig = {
  // react 18 strictmode causes double render
  // reactStrictMode: true,
  basePath: '',
  poweredByHeader: false,
  distDir: '.next',
  trailingSlash: false
};

module.exports = nextConfig;
