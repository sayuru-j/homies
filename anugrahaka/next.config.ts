import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Remove this 
      {
        protocol: "https",
        hostname: "media.gq-magazine.co.uk",
      },
    ],
  },
};

export default nextConfig;
