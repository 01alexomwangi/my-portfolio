import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'Computer Science Student',
  'Software Developer',
  'Database Enthusiast',
]

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Alex Mwangi</h1>
      <h2 key={index} className="hero-title">{roles[index]}</h2>
      <p className="hero-text">
        I'm studying Computer Science at Kiambu National Polytechnic. I enjoy
        building web apps and working with databases.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">View my work</a>
        <a href="#contact" className="btn btn-outline">Contact me</a>
      </div>
    </section>
  )
}

export default Hero