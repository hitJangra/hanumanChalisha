import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this line to stop React from double-mounting and crashing the flipbook
  reactStrictMode: false, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udayavani.com',
      },
    ],
  },
};

export default nextConfig;