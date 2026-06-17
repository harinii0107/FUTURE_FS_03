import ContactForm from '../../components/ContactForm/ContactForm'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Contact.module.css'

const hours = [
  { day: 'Monday – Friday', time: '6:30 AM – 7:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 3:00 PM' },
]

const contactInfo = [
  {
    icon: '📍',
    label: 'Address',
    value: 'No. 128, NSR Road, Saibaba Colony, Coimbatore – 641 011',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 95214 53268',
    href: 'tel:+919521453268',
    id: 'contact-phone-link'
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'hello@sweethearth.com',
    href: 'mailto:hello@sweethearth.com',
    id: 'contact-email-link'
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Message us on WhatsApp',
    href: 'https://wa.me/919521453268',
    id: 'contact-whatsapp-link'
  },
]

export default function Contact() {
  useScrollAnimation()

  return (
    <div className="page-wrapper">

      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1 className={`heading-display ${styles.pageTitle}`}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Whether you're planning a custom order, catering for an event, or just want to say hello —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={`section-padding ${styles.contactSection}`}>
        <div className="container">
          <div className={`grid-2 ${styles.contactGrid}`}>

            {/* Info Column */}
            <div className={`${styles.infoCol} fade-in-up`}>
              <h2 className={styles.infoTitle}>We're Here for You</h2>
              <p className={styles.infoText}>
                Pop in for a coffee and a croissant, give us a call, or send a message.
                We typically respond to emails and WhatsApp messages within a few hours.
              </p>

              {/* Contact Info */}
              <div className={styles.contactItems}>
                {contactInfo.map(item => (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>🕐 Opening Hours</h3>
                <table className={styles.hoursTable}>
                  <tbody>
                    {hours.map(h => (
                      <tr key={h.day}>
                        <td className={styles.hoursDay}>{h.day}</td>
                        <td className={styles.hoursTime}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Form Column */}
            <div className={`${styles.formCol} fade-in-up`}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <p className={styles.formSubtext}>We'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection} aria-label="Our location on Google Maps">
        <div className={styles.mapWrapper}>
          <iframe
            title="Sweet Hearth Bakery location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.559!2d76.9558!3d11.0048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b17c063e89%3A0x0!2zTlNSIFJkLCBTYWliYWJhIENvbG9ueSwgQ29pbWJhdG9yZQ!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.mapOverlayCard}>
            <span className={styles.mapIcon}>📍</span>
            <div>
              <strong>Sweet Hearth Bakery</strong>
              <p>No. 128, NSR Road, Saibaba Colony</p>
              <a
                href="https://maps.google.com/?q=NSR+Road+Saibaba+Colony+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsLink}
                id="get-directions-btn"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className={styles.quickStrip}>
        <div className="container">
          <div className={styles.quickGrid}>
            <a href="tel:+919521453268" className={styles.quickItem} id="quick-call-btn">
              <span>📞</span>
              <span>Call to Order</span>
            </a>
            <a
              href="https://wa.me/919521453268?text=Hi! I'd like to make an order."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickItem}
              id="quick-whatsapp-btn"
            >
              <span>💬</span>
              <span>WhatsApp Us</span>
            </a>
            <a href="mailto:hello@sweethearth.com" className={styles.quickItem} id="quick-email-btn">
              <span>✉️</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
