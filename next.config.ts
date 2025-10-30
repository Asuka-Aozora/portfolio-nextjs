import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domains untuk gambar eksternal
    domains: ["images.unsplash.com", "supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
};

export default nextConfig;
