import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Hospital Appointment System',
    desc: 'A Java-based hospital management system for handling patient appointments and records efficiently.',
    tech: ['Java', 'MySQL', 'Spring Boot'],
    emoji: '🏥',
    github: 'https://github.com/nawodya2003/Hospital_Appointment_System',
  },
  {
    title: 'Students Management System',
    desc: 'A PHP and MySQL-based system for managing student records, attendance, and academic data.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    emoji: '🎓',
    github: 'https://github.com/nawodya2003/Students-Management-System',
  },
  {
    title: 'Auto MCQ Marking App',
    desc: 'An automated system for grading multiple-choice questions using image processing techniques.',
    tech: ['Python', 'OpenCV', 'Flask'],
    emoji: '📝',
    github: 'https://github.com/nawodya2003/Auto_MCQ_marking_App',
  },
  {
    title: 'Video Compressor',
    desc: 'A desktop application that compresses video files without significant quality loss.',
    tech: ['Python', 'FFmpeg', 'PyQt'],
    emoji: '🎥',
    github: 'https://github.com/nawodya2003/Video-Compressor',
  },
  {
    title: 'React Portfolio',
    desc: 'A modern, responsive portfolio website built with React featuring dark theme and smooth animations.',
    tech: ['React', 'CSS', 'EmailJS'],
    emoji: '⚛',
    github: 'https://github.com/nawodya2003/React-Portfolio',
  },
  {
    title: 'Finger Counting Application',
    desc: 'A computer vision app that counts fingers in real-time using a webcam feed.',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    emoji: '✋',
    github: 'https://github.com/nawodya2003/Finger-counting-application',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={project.title} className="project-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="project-img">{project.emoji}</div>
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
    </section>
  )
}

export default Projects
