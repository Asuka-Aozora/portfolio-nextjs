// Root layout yang membungkus semua halaman
// Navbar dan Footer ada di sini agar muncul di semua page

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font Google
const inter = Inter({ subsets: ["latin"] });

// Metadata untuk SEO
export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description:
    "Full-stack developer portfolio showcasing modern web applications",
  keywords: ["portfolio", "web developer", "next.js", "react", "typescript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Flex container untuk sticky footer */}
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {/* Main content area */}
          <main className="grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
