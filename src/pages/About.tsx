function About() {
  const socialLinks = [
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

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Ardi Zanki</h1>
      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          I'm a software engineer with expertise in the React ecosystem, specializing in modern frontend development with Next.js, TypeScript, and Tailwind CSS. I'm passionate about building simple, clean, and minimalist user interfaces—with a strong emphasis on typography and visual hierarchy.
        </p>
        <p>
          Born in Wonogiri, Indonesia, I'm currently based in Yogyakarta. I began my journey into web development in early 2025, driven by a curiosity about user interface technologies and a passion for innovation. I focus on creating seamless user experiences through thoughtful design and clean, maintainable code.
        </p>
        <p>
          Feel free to learn more about my background and interests—or connect with me on{' '}
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
          .
        </p>
      </div>
    </div>
  );
}

export default About;
