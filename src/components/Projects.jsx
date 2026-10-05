import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import portfolioImg from '../assets/portfolio.png'
import factoryImg from '../assets/factory.png'
import hospitalImg from '../assets/hospital.png'
import studentImg from '../assets/student.png'
import mcqImg from '../assets/mcq.png'
import videoImg from '../assets/video.png'
import fingerImg from '../assets/finger.png'

const projects = [
  {
    title: 'Inventory Management System',
    desc: 'Developed a web-based stock and sales management system featuring demand forecasting using machine learning.',
    tech: ['React', 'Node.js', 'MySQL', 'Machine Learning'],
    image: factoryImg,
    github: 'https://github.com/nawodya2003/MY_Northsea',
  },
  {
    title: 'n8n Ai Workflow Automation',
    desc: 'Automated digital content creation and social media publishing workflows using n8n and AI tools.',
    tech: ['n8n', 'AI Tools', 'Workflow Automation'],
    image: portfolioImg,
    github: 'https://github.com/nawodya2003',
  },
  {
    title: 'Video Compressor',
    desc: 'Built a desktop video compression utility using Python, FFmpeg, and PyInstaller.',
    tech: ['Python', 'FFmpeg', 'PyInstaller'],
    image: videoImg,
    github: 'https://github.com/nawodya2003/Video-Compressor',
  },
  {
    title: 'Student Management System Using PHP',
    desc: 'Created a dynamic web application for managing student records using PHP and MySQL.',
    tech: ['PHP', 'MySQL', 'Web Application'],
    image: studentImg,
    github: 'https://github.com/nawodya2003/Students-Management-System',
  },
  {
    title: 'Finger Counting Application',
    desc: 'Developed a real-time computer vision application for hand gesture recognition using Python, OpenCV, and MediaPipe.',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    image: fingerImg,
    github: 'https://github.com/nawodya2003/Finger-counting-application',
  },
  {
    title: 'Hospital Appointment System',
    desc: 'A Java-based hospital management system for handling patient appointments and records efficiently.',
    tech: ['Java', 'MySQL', 'Spring Boot'],
    image: hospitalImg,
    github: 'https://github.com/nawodya2003/Hospital_Appointment_System',
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={project.title} className="project-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="project-img">
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <span className="btn btn-primary">
                  <FaGithub /> GitHub <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Projects
