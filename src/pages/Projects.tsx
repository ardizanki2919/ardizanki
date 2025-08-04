interface Technology {
  name: string;
  url: string;
  category?: 'frontend' | 'backend' | 'database' | 'framework';
}

function Projects() {
  const technologies: Technology[] = [
    { name: 'Next.js', url: 'https://nextjs.org/', category: 'framework' },
    { name: 'React', url: 'https://reactjs.org/', category: 'frontend' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'frontend' },
    { name: 'PHP', url: 'https://www.php.net/', category: 'backend' },
    { name: 'Laravel', url: 'https://laravel.com/', category: 'framework' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', category: 'database' },
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Projects</h1>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-base">
          I'm currently working on exciting projects that I'll be sharing soon. In the meantime, feel free to check out my work on{' '}
          <a 
            href="https://github.com/ardizanki2919" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200"
            aria-label="Visit my GitHub profile"
          >
            GitHub
          </a>
          .
        </p>
        
        <div>
          <p className="text-base mb-4">
            Here are some of my favorite technologies that I use in my projects:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-4">
            {technologies.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                <span className="text-base">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-500 italic">
            Stay tuned for updates on my latest projects and open-source contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
