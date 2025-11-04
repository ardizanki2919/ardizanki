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
        Hi there 👋
      </h1>
      
      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          I'm Ardi, a QA Engineer with 6 years of hands-on experience in both manual and automated testing. 
          My expertise includes API testing with Postman, end-to-end testing with Playwright, CI/CD 
          automation with GitHub Actions, database validation using SQL, and organizing structured test cases using spreadsheets.
        </p>
        
        <p>
          Currently, alongside my work as a QA Engineer, I'm transitioning into Software Engineering to build 
          modern and scalable web applications. In my spare time, I enjoy working on personal projects using 
          Laravel, React, and Vue.
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
