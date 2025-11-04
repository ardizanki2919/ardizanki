interface Technology {
  name: string;
  url: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'framework';
}

// Move outside component to prevent re-creation on each render
const technologies: Technology[] = [
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'language'
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    category: 'language'
  },
  {
    name: 'React',
    url: 'https://reactjs.org/',
    category: 'frontend'
  },
  {
    name: 'Vue',
    url: 'https://vuejs.org/',
    category: 'frontend'
  },
  {
    name: 'PHP',
    url: 'https://php.net/',
    category: 'language'
  },
  {
    name: 'Laravel',
    url: 'https://laravel.com/',
    category: 'backend'
  },

];

// Extract technology rendering logic for better maintainability
const renderTechnology = (tech: Technology) => (
  <li key={tech.name}>
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-all duration-200 group"
      aria-label={`Learn more about ${tech.name} (${tech.category})`}
    >
      <div 
        className="w-2 h-2 rounded-full shrink-0 bg-slate-800 group-hover:scale-110 transition-transform duration-200"
        aria-hidden="true"
      />
      <span className="text-base group-hover:underline">
        {tech.name}
      </span>
      <span className="text-xs text-slate-400 capitalize hidden sm:inline">
        {tech.category}
      </span>
    </a>
  </li>
);

function Projects() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">
        Projects
      </h1>
      
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-base">
          I'm currently working on some exciting projects that I'll be sharing soon. In the meantime, 
          feel free to explore my work on{' '}
          <a 
            href="https://github.com/ardizanki2919" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200"
            aria-label="Visit my GitHub profile to see my code repositories"
          >
            GitHub
          </a>
          .
        </p>
        
        <div>
          <p className="text-base mb-4">
            Here are some of my favorite technologies:
          </p>
          
          <ul 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-4" 
            role="list" 
            aria-label="Favorite technologies list"
          >
            {technologies.map(renderTechnology)}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-500 italic">
            Stay tuned for updates on my latest projects and open-source contributions!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
