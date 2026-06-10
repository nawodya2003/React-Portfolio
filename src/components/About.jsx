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
              I&apos;m a Software Engineering Student passionate about building intelligent backend systems
              and AI-driven applications using Python, Java, JavaScript, and databases like MySQL.
            </p>
            <p>
              I enjoy developing robust architectures, optimizing server-side logic, and integrating machine
              learning models that solve real-world problems. Every project is an opportunity to learn
              and push my boundaries as an engineer.
            </p>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginTop: '16px' }}>
              <strong style={{ color: 'var(--text-dark)' }}>Technologies:</strong>{' '}
              HTML &bull; CSS &bull; JavaScript &bull; React &bull; Java &bull; PHP &bull; Python &bull; MySQL
            </p>
          </div>

          <div className="about-details" data-aos="fade-left">
            <div className="about-card">
              <h3><HiAcademicCap /> Education</h3>
              <p>Diploma in Information Technology</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                University of Moratuwa, Sri Lanka (2025 - 2027)
              </p>
            </div>

            <div className="about-card">
              <h3><HiStar /> Interests</h3>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Backend Development</li>
                <li>Machine Learning</li>
                <li>Software Engineering</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><HiBriefcase /> Career Goals</h3>
              <p>To become a professional AI & Backend Software Engineer and build impactful, intelligent software solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
