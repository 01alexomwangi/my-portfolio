import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src="/profile.jpeg" alt="Alex Mwangi" className="logo-img" />
       <span>Alex Mwangi</span>
       </a>
      <div className="nav-right">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light and dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar