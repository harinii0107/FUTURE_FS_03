import styles from './ProductCard.module.css'

const TAG_LABELS = {
  bestseller: '⭐ Bestseller',
  healthy: '🌿 Healthy',
  vegan: '🌱 Vegan',
  'custom-order': '🎂 Custom Order',
}

export default function ProductCard({ product }) {
  const { name, description, price, image, tags } = product

  return (
    <article className={`card ${styles.card} stagger-item fade-in-up`}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
        />
        {tags.length > 0 && (
          <span className={styles.tag}>{TAG_LABELS[tags[0]]}</span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>
            {price < 20 ? `$${price.toFixed(2)}` : `From $${price.toFixed(2)}`}
          </span>
          <a
            href={`https://wa.me/15551234567?text=Hi! I'd like to order: ${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.orderBtn}
            aria-label={`Order ${name}`}
          >
            Order
          </a>
        </div>
      </div>
    </article>
  )
}
