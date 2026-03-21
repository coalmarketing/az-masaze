/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Image optimization is not supported on Cloudflare Pages.
    // Netlify also serves images fine without server-side optimization.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testadmin-masaze.matfix.cz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.az-masaze.cz',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
