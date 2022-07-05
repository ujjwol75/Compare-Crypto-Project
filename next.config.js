/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['webdesign-finder.com',"bitcoinist.com", "insidecrypto.news"],
  },
}

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);
module.exports = {
  images: {
    domains: ["insidecrypto.news/media/blog/Polium-One.webp"],
  },
};
Footer;
