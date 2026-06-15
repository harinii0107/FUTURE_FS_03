import { useState } from 'react'
import styles from './ContactForm.module.css'

const subjects = [
  'General Inquiry',
  'Custom Cake Order',
  'Catering Request',
  'Wholesale Inquiry',
  'Feedback',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async submission
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: subjects[0], message: '' })
    }, 1200)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>Email Address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>Subject</label>
        <select
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={styles.input}
        >
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          rows={5}
          required
          className={styles.textarea}
        />
      </div>

      {status === 'success' && (
        <div className={styles.successMsg} role="alert">
          ✅ Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      <button
        type="submit"
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={status === 'sending'}
        id="contact-submit-btn"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
