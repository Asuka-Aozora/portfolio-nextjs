// Halaman About
// Berisi bio, skills, dan informasi lainnya

export default function AboutPage() {
  // Daftar skills/technologies
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PHP'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Redis'] },
    { category: 'Tools', items: ['Git', 'Vercel', 'Railway', 'Linux Server (Ubuntu, AlmaLinux)'] },
    { category: 'Security & Auth', items: ['JWT', 'Firebase Auth', 'RBAC'] },
    { category: 'Soft Skills', items: ['Debugging', 'Mentoring', 'Collaboration', 'Problem-Solving', 'Fast Learning'] },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          Get to know more about my background and expertise
        </p>
      </div>

      {/* Bio Section */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I&apos;m a dedicated Full-Stack Developer and IT Support Specialist
            with hands-on experience in building, deploying, and maintaining web
            applications. I specialize in modern JavaScript technologies —
            particularly Node.js, Express, React, and Next.js — and enjoy
            working with both SQL and NoSQL databases such as PostgreSQL, MySQL,
            and MongoDB.
          </p>
          <p>
            Currently, I’m a mentor at Qodr IT Training, guiding junior
            developers through real project development, debugging, and
            deployment workflows. I also serve as CTO at Daysra Tech, a startup
            initiative focused on productivity-based web solutions using
            Supabase and Prisma.
          </p>
          <p>
            I believe in writing clean, maintainable code and continuously
            improving through learning, collaboration, and discipline.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card p-6">
              <h3 className="text-lg font-semibold text-primary-600 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact/Social Section */}
      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-600 mb-6">
          I&apos;m open to collaborating on meaningful web projects, mentoring
          sessions, or technical discussions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:azdin1411@gmail.com" className="btn-primary">
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/azka-musthafa-hafiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}