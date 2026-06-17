import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { featuredProducts, heroBg } from '../../data/products'
import { testimonials } from '../../data/testimonials'
import ProductCard from '../../components/ProductCard/ProductCard'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import aboutImg from '../../assets/images/about.png'
import styles from './Home.module.css'

const features = [
  {
    icon: '🌾',
    title: 'Stone-Ground Grains',
    desc: 'We source heirloom wheat directly from local farms and mill it fresh for unmatched flavor and nutrition.',
  },
  {
    icon: '⏰',
    title: 'Baked Every Morning',
    desc: 'Our bakers start at 4 AM so every loaf and pastry is oven-fresh when you walk through our doors.',
  },
  {
    icon: '❤️',
    title: 'Made with Tradition',
    desc: 'Every recipe passed down through generations — slow fermentation, natural starters, no shortcuts.',
  },
]

const stats = [
  { number: '14+', label: 'Years Baking' },
  { number: '60+', label: 'Menu Items' },
  { number: '2,000+', label: 'Happy Customers/Month' },
  { number: '100%', label: 'Natural Ingredients' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80', alt: 'Artisan bread' },
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80', alt: 'Focaccia baking' },
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80', alt: 'Chocolate cake' },
  { src: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80', alt: 'Danish pastry' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80', alt: 'Lemon cake' },
  { src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80', alt: 'Strawberry cake' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <div className={styles.home}>

      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Welcome to Sweet Hearth Bakery">
        <div className={styles.heroImage} style={{ backgroundImage: `url(${heroBg})` }} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>✨ Artisan Bakery Since 2010</span>
          <h1 className={`heading-display ${styles.heroTitle}`}>
            Baked with <span className={styles.heroAccent}>Love</span>,<br />
            Served with Joy
          </h1>
          <p className={styles.heroSubtitle}>
            Hand-crafted breads, pastries, and cakes made fresh every morning<br />
            from the finest natural ingredients.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/menu" className="btn btn-primary" id="hero-menu-btn">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="btn btn-outline" id="hero-contact-btn">
              Find Us
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll Down</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className={styles.statsStrip} aria-label="Bakery statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(stat => (
              <div key={stat.label} className={`${styles.statItem} fade-in-up`}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={`section-padding ${styles.features}`} aria-label="Why choose Sweet Hearth">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="heading-section">Craftsmanship in Every Crumb</h2>
            <div className="divider" />
          </div>
          <div className={`grid-3 ${styles.featuresGrid}`}>
            {features.map(f => (
              <div key={f.title} className={`${styles.featureCard} fade-in-up`}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ITEMS ── */}
      <section className={`section-padding ${styles.featured}`} aria-label="Featured bakery items">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-label">Our Bestsellers</span>
              <h2 className="heading-section">Customer Favourites</h2>
              <div className="divider" />
            </div>
            <Link to="/menu" className="btn btn-outline-dark" id="view-full-menu-btn">
              Full Menu →
            </Link>
          </div>
          <div className="grid-4">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className={`section-padding ${styles.aboutPreview}`} aria-label="About Sweet Hearth Bakery">
        <div className="container">
          <div className={`grid-2 ${styles.aboutGrid}`}>
            <div className={`${styles.aboutImageCol} fade-in`}>
              <img src={aboutImg} alt="Sweet Hearth Bakery interior" className={styles.aboutImage} loading="lazy" />
              <div className={styles.aboutImageBadge}>
                <span>🏆</span>
                <span>Best Local Bakery 2023</span>
              </div>
            </div>
            <div className={`${styles.aboutContent} fade-in-up`}>
              <span className="section-label">Our Story</span>
              <h2 className="heading-section">Where Every Morning Starts with Something Wonderful</h2>
              <div className="divider" />
              <p className={styles.aboutText}>
                Sweet Hearth Bakery was born from a simple belief: great bread takes time, care, and the best ingredients. 
                Founded in 2010 by Meenakshi Iyer, we started with one beloved recipe and a small rented kitchen.
              </p>
              <p className={styles.aboutText}>
                Today, we're proud to be a neighbourhood institution — a place where regulars are greeted by name and 
                first-timers always become regulars. Every loaf, every tart, every cake is made from scratch, every day.
              </p>
              <Link to="/about" className="btn btn-primary" id="learn-more-btn">
                Learn Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`section-padding ${styles.testimonials}`} aria-label="Customer testimonials">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">Testimonials</span>
            <h2 className="heading-section">What Our Customers Say</h2>
            <div className="divider" />
          </div>
          <div className={`grid-4 ${styles.testimonialsGrid}`}>
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className={styles.gallery} aria-label="Photo gallery">
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.galleryOverlay} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner} aria-label="Call to action">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={`heading-display ${styles.ctaTitle}`}>
              Ready for Something Delicious?
            </h2>
            <p className={styles.ctaText}>
              Order online, call us, or walk in. We bake fresh every morning — come while it's warm.
            </p>
            <div className={styles.ctaBtns}>
              <Link to="/menu" className="btn btn-primary" id="cta-menu-btn">View Our Menu</Link>
              <a href="tel:+919521453268" className="btn btn-outline" id="cta-call-btn">📞 Call Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
