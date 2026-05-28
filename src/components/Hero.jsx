import { Link } from 'react-scroll'
import { HiArrowRight } from 'react-icons/hi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <p className="greeting" data-aos="fade-down" data-aos-delay="100">Hello, I&apos;m</p>
        <h1 data-aos="fade-up" data-aos-delay="200">Nawodya Rashmina</h1>
        <p className="role" data-aos="fade-up" data-aos-delay="300">
          <span>Frontend Developer</span> &amp; Software Engineering Student
        </p>
        <p className="intro" data-aos="fade-up" data-aos-delay="400">
          Passionate about building modern, responsive, and user-friendly applications
          using Java, JavaScript, React, PHP, and Python.
        </p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
          <Link to="projects" smooth duration={500} offset={-70} className="btn btn-primary">
            View Projects <HiArrowRight />
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
