/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "*.*",
      "picsum.photos",
      "i.picsum.photos",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "googleusercontent.com",
      "tryhardguides.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
