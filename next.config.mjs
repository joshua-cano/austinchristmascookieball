/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
      },
    ],
  },
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
