import { Link } from 'react-scroll'
import { HiArrowRight } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import profileImg from '../assets/profile.jpg'

const Hero = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  const stats = [
    { number: '2+', label: 'Experiences' },
    { number: '10+', label: 'Projects Done' },
    { number: '50+', label: 'Happy Clients' }
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right" data-aos-delay="100">
          <p className="greeting" data-aos="fade-down" data-aos-delay="100">Hello, I&apos;m</p>
          <h1 data-aos="fade-up" data-aos-delay="200">Nawodya Rashmina</h1>
          <p className="role" data-aos="fade-up" data-aos-delay="300">
            <span>AI &amp; Backend Engineer</span> &amp; Software Engineering Student
          </p>
          <p className="intro" data-aos="fade-up" data-aos-delay="400">
            Passionate about building intelligent backend systems, AI-driven applications, and scalable software solutions
            using Java, JavaScript, Python, and modern AI frameworks.
          </p>

          <div className="social-icons" data-aos="fade-up" data-aos-delay="450">
            <a href="https://www.linkedin.com/in/nawodya-rashmina-59aa2435b" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nawodya2003" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
          </div>

          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
            <Link to="projects" smooth duration={500} offset={-70} className="btn btn-primary">
              View Projects
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <div className="stats-section" data-aos="fade-up" data-aos-delay="550">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
          <div className="image-wrapper">
            <img src={profileImg} alt="Nawodya Rashmina" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
