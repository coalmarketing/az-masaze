/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testadmin-masaze.matfix.cz',
        pathname: '/**',
      },
    ],
  },
  // Nastavení statické optimalizace
  trailingSlash: true,
};

module.exports = nextConfig; 