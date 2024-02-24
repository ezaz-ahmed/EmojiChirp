/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
        port: '',
        pathname: '/ezaz/**',
      },
    ],
  },
  reactStrictMode: false
};

export default nextConfig;
