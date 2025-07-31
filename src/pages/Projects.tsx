function Projects() {
  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'Laravel',
    'PHP',
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Projects</h1>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <div>
          <p className="text-base mb-4">
            I'm passionate about building intuitive and visually appealing applications. Here are some of my favorite technologies that I currently use:
          </p>
          <ul className="list-disc list-inside text-base space-y-2 ml-4">
            {technologies.map((tech) => (
              <li key={tech} className="text-slate-600">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
