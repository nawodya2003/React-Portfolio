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
              I&apos;m a Software Engineering Student passionate about building modern,
              responsive, and user-friendly applications using Java, JavaScript, React,
              PHP, and Python.
            </p>
            <p>
              I enjoy creating clean, intuitive interfaces and full-stack solutions
              that solve real-world problems. Every project is an opportunity to learn
              and push my boundaries as a developer.
            </p>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginTop: '16px' }}>
              <strong style={{ color: 'var(--text-dark)' }}>Technologies:</strong>{' '}
              HTML &bull; CSS &bull; JavaScript &bull; React &bull; Java &bull; PHP &bull; Python &bull; MySQL
            </p>
          </div>

          <div className="about-details" data-aos="fade-left">
            <div className="about-card">
              <h3><HiAcademicCap /> Education</h3>
              <p>BSc in Software Engineering</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                University of Sri Jayewardenepura
              </p>
            </div>

            <div className="about-card">
              <h3><HiStar /> Interests</h3>
              <ul>
                <li>Frontend Web Development</li>
                <li>Full-Stack Application Development</li>
                <li>UI/UX Design</li>
                <li>Software Engineering</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><HiBriefcase /> Career Goals</h3>
              <p>To become a professional Full-Stack Software Engineer and build impactful software solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
