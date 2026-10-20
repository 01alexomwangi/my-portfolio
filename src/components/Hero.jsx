import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Alex Mwangi</h1>
      <h2 className="hero-title">Computer Science Student & Aspiring Developer</h2>
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