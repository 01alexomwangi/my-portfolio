import './Skills.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiCplusplus,
  SiC,
  SiDotnet,
  SiSqlite,
  SiVercel,
  SiRailway,
  SiRender,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { DiVisualstudio } from 'react-icons/di'

const skillGroups = [
  {
    title: 'Web Development',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'PHP', icon: FaPhp },
      { name: 'Laravel', icon: FaLaravel },
    ],
  },
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'VB.NET', icon: SiDotnet },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'SQL', icon: FaDatabase },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    title: 'Tools & IDEs',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Visual Studio', icon: DiVisualstudio },
      { name: 'Falcon C++', icon: FaCode },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Railway', icon: SiRailway },
      { name: 'Render', icon: SiRender },
    ],
  },
  {
    title: 'Office',
    items: [
      { name: 'Word', icon: FaFileWord },
      { name: 'Excel', icon: FaFileExcel },
      { name: 'PowerPoint', icon: FaFilePowerpoint },
    ],
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
              {group.items.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Icon className="skill-icon" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills