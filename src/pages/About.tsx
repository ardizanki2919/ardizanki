function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">
        Hi there 👋
      </h1>

      <div className="space-y-6 text-base text-slate-600 leading-relaxed">
        <p>
          I'm Ardi, a Design Engineer based in Indonesia. I build polished web interfaces using React and TypeScript, 
          with a strong focus on quality and user experience.
        </p>

        <p>
          My background as a QA Engineer (5 years) gives me a unique perspective—I approach design engineering with 
          a testing mindset, ensuring reliability and attention to detail in every component I create.
        </p>

        <p>
          I work with Figma for design and React with TypeScript for implementation, and I enjoy exploring design systems 
          and creating smooth interactions.
        </p>

        <p>
          You can see more of my work on{' '}
          <a
            href="https://x.com/ardizanki7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 rounded-sm"
            aria-label="Visit my Twitter profile"
          >
            Twitter
          </a>
          {' '}and more of my code on{' '}
          <a
            href="https://github.com/ardizanki2919"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-slate-600 underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 rounded-sm"
            aria-label="Visit my GitHub profile"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
