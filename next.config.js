/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['testadmin-masaze.matfix.cz', 'admin.az-masaze.cz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testadmin-masaze.matfix.cz',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.az-masaze.cz',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig; 