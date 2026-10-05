import { HiAcademicCap, HiStar, HiBriefcase } from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>
              I am a highly motivated undergraduate in Software Engineering at the University of Moratuwa, eager to join as a Full Stack Software Engineer Intern. I am self motivated, ready to develop modern high tech web and mobile applications, and excited to contribute to innovative SaaS products while learning every day in a collaborative environment.
            </p>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginTop: '16px' }}>
              <strong style={{ color: 'var(--text-dark)' }}>Technologies:</strong>{' '}
              Python &bull; JavaScript &bull; Java &bull; PHP &bull; HTML &bull; CSS &bull; SQL &bull; React &bull; Spring Boot
            </p>
          </div>

          <div className="about-details" data-aos="fade-left">
            <div className="about-card">
              <h3><HiAcademicCap /> Education</h3>
              <p>Diploma in Information Technology</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '8px' }}>
                University of Moratuwa, ITUM (2025 - 2027)
              </p>
              <p>Level 02 Completed</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                DP Education IT Campus (2024 - 2025)
              </p>
            </div>

            <div className="about-card">
              <h3><HiStar /> Interests</h3>
              <ul>
                <li>Full Stack Development</li>
                <li>Web & Mobile Apps</li>
                <li>SaaS Products</li>
                <li>AI Tools & Automation</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><HiBriefcase /> Career Goals</h3>
              <p>To join as a Full Stack Software Engineer Intern and contribute to innovative SaaS products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
