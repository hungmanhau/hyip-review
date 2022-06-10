/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET: process.env.SECRET,
    MONGO: process.env.MONGO,
  },
};

module.exports = nextConfig;
