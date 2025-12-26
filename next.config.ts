/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",


  basePath: "/MyPortfolio",
  assetPrefix: "/MyPortfolio/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
