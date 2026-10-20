import './Projects.css'

const projects = [
  {
    title: 'RetailDB',
    description:
      'A retail database built with SQLite. Replace this with what the project does, what you designed, and what you learned.',
    tech: ['SQL', 'SQLite'],
    github: 'https://github.com/your-username/retaildb',
    live: '',
  },
  {
    title: 'My Portfolio',
    description:
      'This website, built from scratch with React and Vite, and deployed on Vercel.',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    github: 'https://github.com/your-username/my-portfolio',
    live: '',
  },
  {
    title: 'Project Three',
    description: 'Add another project here once you have one to show.',
    tech: ['JavaScript'],
    github: '',
    live: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects