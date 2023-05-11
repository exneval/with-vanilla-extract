// NOTE: Uncomment this when building with docker
// const path = require("path");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withDocker = {
  // output: "standalone",
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
};
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withDocker,
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
