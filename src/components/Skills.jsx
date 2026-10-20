import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
   {
    title: 'Backend',
    items: ['Python', 'Java', 'C++', 'C','Php','VB.NET'],
  },

  {
    title: 'Databases',
    items: ['SQL', 'SQLite'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel','Railway','Render','Falcon c++','Microsoft Visual Studio 2010','Microsoft Word','Excel','PowerPoint'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills