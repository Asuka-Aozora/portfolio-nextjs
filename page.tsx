// Halaman utama (Home)
// Menampilkan hero section dengan foto, nama, role, dan CTA buttons

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hi, I&apos;m <span className="text-primary-600">Azka</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            Full-Stack Developer
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            I build modern web applications with cutting-edge technologies.
            Passionate about creating elegant solutions to complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/about" className="btn-secondary">
              About Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="shrink-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-primary-100">
            <Image
              src="/profile.jpg" // Ganti dengan path foto Anda
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Optional: Featured Stats or Skills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {[
          { label: "Years Experience", value: "2+" },
          { label: "Projects Completed", value: "30+" },
          { label: "Happy Clients", value: "10+" },
          { label: "Technologies", value: "15+" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
