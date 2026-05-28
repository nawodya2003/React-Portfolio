import { useState, useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPhp, FaPython, FaDatabase } from 'react-icons/fa'

const skills = [
  { name: 'HTML', level: 90, icon: FaHtml5 },
  { name: 'CSS', level: 85, icon: FaCss3Alt },
  { name: 'JavaScript', level: 80, icon: FaJs },
  { name: 'React', level: 75, icon: FaReact },
  { name: 'Java', level: 70, icon: FaJava },
  { name: 'PHP', level: 65, icon: FaPhp },
  { name: 'Python', level: 60, icon: FaPython },
  { name: 'MySQL', level: 65, icon: FaDatabase },
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
