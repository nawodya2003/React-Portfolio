import { useState, useEffect, useRef } from 'react'
import { FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si'

const skills = [
  { name: 'Python', level: 90, icon: FaPython },
  { name: 'JavaScript', level: 85, icon: FaJs },
  { name: 'TypeScript', level: 80, icon: SiTypescript },
  { name: 'Node.js', level: 85, icon: FaNodeJs },
  { name: 'React', level: 80, icon: FaReact },
  { name: 'Next.js', level: 75, icon: SiNextdotjs },
  { name: 'PostgreSQL', level: 80, icon: SiPostgresql },
  { name: 'Git', level: 85, icon: FaGitAlt },
]

const Skills = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={skill.name} className="skill-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <skill.icon className="skill-icon" />
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
