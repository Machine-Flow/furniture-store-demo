import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const contactDetails = [
  { label: 'Showroom', value: 'Downtown Beirut, Lebanon' },
  { label: 'Phone', value: '+961 1 000 000' },
  { label: 'Email', value: 'hello@furniture-store.com' },
  { label: 'Hours', value: 'Mon–Sat, 9:00 — 19:00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (form.name.trim().length < 2) errs.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) errs.message = 'Tell us a little more (10+ characters).'
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSent(true)
  }

  return (
    <div className="page">
      <PageHeader
        overline="Get in touch"
        title="Contact Us"
        intro="Questions about a piece, an order, or a custom project? We would love to hear from you."
      />

      <div className="contact-grid">
        <div className="contact-details">
          <h2>Visit the showroom</h2>
          <ul className="contact-list">
            {contactDetails.map((d) => (
              <li key={d.label}>
                <span className="contact-label">{d.label}</span>
                <span className="contact-value">{d.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-form">
          {sent ? (
            <div className="success-panel contact-success">
              <span className="success-check">✓</span>
              <h3>Message sent!</h3>
              <p>Thanks, {form.name}. Our team will reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" placeholder="Jane Doe" value={form.name} onChange={set('name')} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="4" placeholder="How can we help?" value={form.message} onChange={set('message')} />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
