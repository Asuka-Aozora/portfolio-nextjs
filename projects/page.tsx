// Halaman Projects
// Fetch data dari Supabase dan tampilkan dalam grid

import ProjectCard from "@/components/PorjectCard";
import { supabase } from "@/lib/supabase";
import type { Project } from "@/lib/supabase";

// Async Server Component - fetch data di server
export default async function ProjectsPage() {
  // Fetch projects dari Supabase
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  // Handle error
  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Unable to Load Projects
          </h1>
          <p className="text-gray-600">
            There was an error loading the projects. Please try again later.
          </p>
          <p className="text-sm text-red-600 mt-2">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  // Handle empty state
  if (!projects || projects.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            No Projects Yet
          </h1>
          <p className="text-gray-600">
            Projects will appear here once they are added to the database.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, showcasing various
          technologies and problem-solving approaches.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

// Revalidate setiap 60 detik (ISR - Incremental Static Regeneration)
export const revalidate = 60;
