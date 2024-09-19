/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['geist'],
  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL || 'http://backend:4000';

    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/:path*`,
      },
      {
        source: '/:shortUrl',
        destination: `${apiBaseUrl}/url/:shortUrl`,
      },
    ];
  },
};

export default nextConfig;
