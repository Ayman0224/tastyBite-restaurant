
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <span className="tagline">GET IN TOUCH</span>
        <h1>We'd Love to Hear From You</h1>
        <p>
          Have a question or suggestion? Send us a message.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            We're happy to hear your feedback and answer your
            questions about TastyBite.
          </p>

          <div className="contact-info-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>hello@tastybite.example</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+961 70 000 000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Lebanon</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is your message about?"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" className="primary-button">
            Send Message →
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your message passed the form checks.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Contact
