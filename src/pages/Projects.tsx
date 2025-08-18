interface Technology {
  name: string;
  url: string;
  category: 'frontend' | 'backend' | 'database' | 'framework';
}

// Move outside component to prevent re-creation on each render
const technologies: Technology[] = [
  { name: 'Next.js', url: 'https://nextjs.org/', category: 'framework' },
  { name: 'Node.js', url: 'https://nodejs.org/', category: 'backend' },
  { name: 'React', url: 'https://reactjs.org/', category: 'frontend' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', category: 'database' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'frontend' },
];

// Category colors for visual differentiation
const categoryColors: Record<Technology['category'], string> = {
  frontend: 'bg-blue-400',
  backend: 'bg-green-400',
  database: 'bg-purple-400',
  framework: 'bg-orange-400',
};

function Projects() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Technologies</h1>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-base">
          I'm currently working on exciting projects that I'll be sharing soon. In the meantime, feel free to check out my work on{' '}
          <a 
            href="https://github.com/ardizanki2919" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-sm"
            aria-label="Visit my GitHub profile to see my code repositories"
          >
            GitHub
          </a>
          .
        </p>
        
        <div>
          <p className="text-base mb-4">
            Here are some of my favorite technologies that I use in my projects:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-4" role="list" aria-label="Favorite technologies list">
            {technologies.map((tech) => (
              <li key={tech.name}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-sm p-1 -m-1"
                  aria-label={`Learn more about ${tech.name} (${tech.category})`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryColors[tech.category]} group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  />
                  <span className="text-base group-hover:underline">{tech.name}</span>
                  <span className="text-xs text-slate-400 capitalize hidden sm:inline">
                    {tech.category}
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
