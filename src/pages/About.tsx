interface SocialLink {
  href: string;
  label: string;
  name: string;
}

// Static data — defined outside component to avoid re-renders
const socialLinks: SocialLink[] = [
  { href: 'https://x.com/ardizanki7', label: 'X (Twitter)', name: 'Twitter profile' },
  { href: 'https://github.com/ardizanki2919', label: 'GitHub', name: 'GitHub profile' },
  { href: 'https://www.linkedin.com/in/ardizanki/', label: 'LinkedIn', name: 'LinkedIn profile' },
];

// Improved link renderer — cleaner, fewer wrappers, more readable
const renderSocialLinks = (links: SocialLink[]): React.ReactNode => {
  return links.map((link, index) => {
    const isLast = index === links.length - 1;
    const isSecondLast = index === links.length - 2;

    return (
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

        {/* separator logic */}
        {!isLast && (
          <span className="text-slate-600">
            {isSecondLast ? ", or " : ", "}
          </span>
        )}
      </span>
    );
  });
};

function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">
        Hi there 👋
      </h1>

      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          I'm Ardi, a QA Engineer with 5 years of hands-on experience in manual and automated testing. I specialize in API testing 
          with Postman, end-to-end automation with Playwright, and CI/CD integration with GitHub Actions. My skill set also includes 
          SQL-based database validation and comprehensive test case management.
        </p>

        <p>
          I'm currently transitioning from QA Engineering to Software Engineering to build modern and scalable web applications.
          In my spare time, I work on personal projects using TypeScript and React.
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
