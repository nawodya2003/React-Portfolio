import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="hero" smooth duration={500} className="logo">
          Nawodya Rashmina<span>.</span>
        </Link>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <Link
              key={item}
              to={item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}
              smooth
              duration={500}
              spy
              offset={-70}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
