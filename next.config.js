/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'auto-promo-ph-api.onrender.com', '192.168.1.3'],
    unoptimized: true,
  } 
}

module.exports = nextConfig
