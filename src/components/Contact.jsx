import { useState } from 'react'
import emailjs from 'emailjs-com'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus(null)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Me</h2>
          <p>Let&apos;s work together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Get in Touch</h3>
            <p>
              Have a project in mind? Feel free to reach out.
              I&apos;m always open to discussing new ideas and opportunities.
            </p>
            <div className="contact-item">
              <HiMail />
              <span>uninawodya@gmail.com</span>
            </div>
            <div className="contact-item">
              <HiLocationMarker />
              <span>Sri Lanka</span>
            </div>
            <div className="contact-item">
              <HiPhone />
              <span>0775601147</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status === 'success' && (
              <div className="submit-msg success">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="submit-msg error">Failed to send. Try again.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
