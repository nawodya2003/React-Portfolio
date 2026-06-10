import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/nawodya" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/nawodya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Nawodya Rashmina. All rights reserved.</p>
    </footer>
  )
}

export default Footer
