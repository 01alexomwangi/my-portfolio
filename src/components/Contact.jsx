import './Contact.css'

const contactLinks = [
  { label: 'Email', value: '01alexomwangi@gmail.com', href: 'mailto:your.01alexomwangi@gmail.com' },
  { label: 'GitHub', value: 'https://github.com/01alexomwangi', href: 'https://github.com/01alexomwangi' },
  { label: 'LinkedIn', value: 'linkedin.com/in/your-username', href: 'https://linkedin.com/in/your-username' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">
        I'm open to internships, collaborations, and new opportunities.
        The best way to reach me is by email.
      </p>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            className="contact-card"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{link.label}</span>
            {link.value}
          </a>
        ))}
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} Alex Mwangi. Built with React.
      </footer>
    </section>
  )
}

export default Contact