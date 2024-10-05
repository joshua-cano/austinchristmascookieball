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
    serverComponentsExternalPackages: ["airtable"],
  },
};

export default nextConfig;
