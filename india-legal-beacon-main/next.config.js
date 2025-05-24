/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add basePath if your app is not deployed at the root of the domain
  // basePath: '/your-base-path',
  
  // Add this if you're using static exports
  // output: 'export',
  
  // Enable static HTML export
  // images: {
  //   unoptimized: true,
  // },
  
  // Handle 404s in production
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ]
  },
  
  // Handle trailing slashes
  trailingSlash: false,
  
  // Add environment variables that should be available on the client side
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
}

module.exports = nextConfig
