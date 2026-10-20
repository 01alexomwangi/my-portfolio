import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Computer Science student at Kiambu National Polytechnic.
            I like turning ideas into working software, and I'm learning
            something new with every project I build.
          </p>
          <p>
            Replace this paragraph with your own story: what got you into
            coding, what you enjoy building, and what you want to do next.
          </p>
        </div>
        <ul className="about-facts">
          <li><span>Studying</span> Computer Science</li>
          <li><span>School</span> Kiambu National Polytechnic</li>
          <li><span>Focus</span> Web development & databases</li>
          <li><span>Location</span> Kenya</li>
        </ul>
      </div>
    </section>
  )
}

export default About