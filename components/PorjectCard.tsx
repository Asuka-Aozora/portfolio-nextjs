// Komponen untuk menampilkan card project
// Digunakan di halaman /projects

import Image from "next/image";
import Link from "next/link";
import { getImageUrl, Project } from "@/lib/supabase";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Get public URL dari Supabase Storage
  const imageUrl = getImageUrl(project.image_path);

  return (
    <div className="card overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description || "No description available"}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.demo_url && (
            <Link
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center btn-primary text-sm py-2"
            >
              Live Demo
            </Link>
          )}

          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center btn-secondary text-sm py-2"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
