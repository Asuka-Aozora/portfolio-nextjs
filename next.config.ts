/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
