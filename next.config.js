const withPWA = require('next-pwa')({
  dest: 'public',  
  disable: process.env.NODE_ENV === 'development', 
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
   transpilePackages: ['lucide-react']
};

module.exports = withPWA(nextConfig);
