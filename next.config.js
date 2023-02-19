/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: '/api',
        destination: 'https://localhost:5000',
      },
    ];
  },
};

module.exports = nextConfig;
