/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rwa',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
