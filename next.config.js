/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");


module.exports = {
  images: {
    domains: ["insidecrypto.news", "servedbyadbutler.com"],
  },
};
