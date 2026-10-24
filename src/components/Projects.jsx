import './Projects.css'

const projects = [
    {
    title: 'ProPlumber: Full Stack Web Application',
    description:
      'A complete plumber business website with a public landing page and a private admin panel. Built with a Laravel 13 backend API and a React + TypeScript frontend.',
    image: '',
    tech: ['React', 'TypeScript', 'Laravel', 'PHP'],
    github: 'https://github.com/01alexomwangi/plumber-frontend',
    github2: 'https://github.com/01alexomwangi/plumber-api',
    live: 'https://plumber-frontend-zeta.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This website, built from scratch with React and Vite. It has light and dark themes, a responsive layout with a mobile menu, and automatic deployment on Vercel every time I push to GitHub.',
    image: '',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    github: 'https://github.com/01alexomwangi/my-portfolio',
    live: 'https://my-portfolio-alpha-one-90.vercel.app/',
  },
  {
    title: 'AutoKenya',
    description:
      'An online platform that gives car yards a way to market and sell their cars on the web, helping them reach more buyers beyond their physical location.',
    image: '',
    tech: ['JavaScript'],
    github: 'https://github.com/01alexomwangi/AutoKenya',
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
            {project.image && (
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="project-image"
              />
            )}
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
                  {project.github2 ? 'Frontend' : 'GitHub'}
                </a>
              )}
              {project.github2 && (
                <a href={project.github2} target="_blank" rel="noreferrer">
                  Backend
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
      <p className="projects-more">
        <a
          href="https://github.com/01alexomwangi"
          target="_blank"
          rel="noreferrer"
        >
          See all my projects on GitHub →
        </a>
      </p>
    </section>
  )
}

export default Projects