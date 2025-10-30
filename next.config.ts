import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domains untuk gambar eksternal
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
};

export default nextConfig;
