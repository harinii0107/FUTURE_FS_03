import styles from './TestimonialCard.module.css'

export default function TestimonialCard({ testimonial }) {
  const { name, role, avatar, rating, text } = testimonial

  return (
    <div className={`card ${styles.card} stagger-item fade-in-up`}>
      <div className={styles.stars} aria-label={`${rating} stars`}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <blockquote className={styles.quote}>"{text}"</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">{avatar}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  )
}
