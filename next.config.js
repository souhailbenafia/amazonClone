/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains : ["links.papareact.com","fakestoreapi.com","www.jsonkeeper.com" ],
    }
  }
  
  module.exports = nextConfig