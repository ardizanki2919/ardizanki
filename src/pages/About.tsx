interface SocialLink {
  href: string;
  label: string;
  name: string;
}

// Move outside component to prevent re-creation on each render
const socialLinks: SocialLink[] = [
  {
    href: 'https://x.com/ardizanki7',
    label: 'X (Twitter)',
    name: 'Twitter profile',
  },
  {
    href: 'https://github.com/ardizanki2919',
    label: 'GitHub',
    name: 'GitHub profile',
  },
  {
    href: 'https://www.linkedin.com/in/ardizanki/',
    label: 'LinkedIn',
    name: 'LinkedIn profile',
  },
];

// Extract link formatting logic for better readability and maintainability
const renderSocialLinks = (links: SocialLink[]): React.ReactNode => {
  return links.map((link, index) => (
    <span key={link.href}>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 rounded-sm"
        aria-label={`Visit my ${link.name}`}
      >
        {link.label}
      </a>
      {index < links.length - 1 && (
        <span className="text-slate-600">
          {index === links.length - 2 ? ', or ' : ', '}
        </span>
      )}
    </span>
  ));
};

function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">
        Hey hey, I'm Ardi!
      </h1>
      
      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          I'm a Software Engineer specializing in JavaScript, TypeScript, and React. 
          I build scalable, high-performance web applications with clean, maintainable code, 
          applying modern practices like modular architecture, automated testing, and CI/CD integration.
        </p>
        
        <p>
          Based in Yogyakarta, Indonesia, I started my journey in web development out of curiosity 
          for modern technologies and a passion for crafting user-focused solutions. With six years 
          of QA experience, I bring a solid foundation in testing and software quality — now combining 
          that background with software engineering to create reliable, well-structured products across 
          both frontend and backend.
        </p>
        
        <p>
         Feel free to connect with me on{' '}
          {renderSocialLinks(socialLinks)}
          {' '}to exchange ideas and explore web development together.
        </p>
      </div>
    </div>
  );
}

export default About;
