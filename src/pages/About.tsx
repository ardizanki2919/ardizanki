interface SocialLink {
  href: string;
  label: string;
  name: string;
}

// Move outside component to prevent re-creation on each render
const socialLinks: SocialLink[] = [
  {
    href: 'https://x.com/ardizanki7',
    label: 'Twitter',
    name: 'Twitter profile',
  },
  {
    href: 'https://www.linkedin.com/in/ardizanki/',
    label: 'LinkedIn',
    name: 'LinkedIn profile',
  },
  {
    href: 'https://github.com/ardizanki2919',
    label: 'GitHub',
    name: 'GitHub profile',
  },
];

function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Ardi Zanki</h1>
      
      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          Hi, I'm Ardi — a Software Engineer specializing in TypeScript, React, and Next.js. I focus on building scalable web applications with clean, maintainable code and contemporary development practices.
        </p>
        <p>
          I'm currently based in Yogyakarta, Indonesia. I recently began my journey in web development, driven by curiosity about modern technologies and a passion for creating efficient, user-focused solutions. My approach emphasizes simplicity, performance, and thoughtful architecture to deliver seamless user experiences.
        </p>
        <p>
          Feel free to connect with me on{' '}
          {socialLinks.map((link, index) => (
            <span key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200"
                aria-label={`Visit my ${link.name}`}
              >
                {link.label}
              </a>
              {index < socialLinks.length - 1 && (
                <span>{index === socialLinks.length - 2 ? ', or ' : ', '}</span>
              )}
            </span>
          ))}
          {' '}to explore my work and discuss web development!
        </p>
      </div>
    </div>
  );
}

export default About;
