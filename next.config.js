/** @type {import('next').NextConfig} */
const nextConfig = {
  // environment variables for use in client and server side
  env: {
    DRAWER_WIDTH: '200',
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/pricepulse",
    DB_URI: "",
  },
  reactStrictMode: true,
  // settings for optimized image loading
  images: {
    // trusted domains for image uploads
    domains: ['source.unsplash.com', 'res.cloudinary.com', 'firebasestorage.googleapis.com', '192.168.1.3'],
  } 
}

module.exports = nextConfig
