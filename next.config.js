/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  webpack: (config, { watchOptions }) => {
    watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [path.join(__dirname, "node_modules")],
    };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
};
