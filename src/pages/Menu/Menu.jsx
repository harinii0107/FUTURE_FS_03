import { useState } from 'react'
import { products, categories } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Menu.module.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  useScrollAnimation()

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">What We Bake</span>
          <h1 className={`heading-display ${styles.pageTitle}`}>Our Menu</h1>
          <p className={styles.pageSubtitle}>
            Everything made fresh from scratch, every single morning.
            From our signature sourdoughs to celebration cakes — there's something for everyone.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection} aria-label="Menu categories">
        <div className="container">
          <div className={styles.filterTabs} role="tablist" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                id={`tab-${cat.id}`}
                className={`${styles.filterTab} ${activeCategory === cat.id ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className={styles.count}>
                  {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section-padding ${styles.productsSection}`} aria-label="Menu items">
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.noItems}>No items in this category.</p>
          ) : (
            <div className={`grid-4 ${styles.productsGrid}`}>
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className={styles.customOrder}>
        <div className="container">
          <div className={styles.customCard}>
            <span className={styles.customIcon}>🎂</span>
            <div>
              <h2 className={styles.customTitle}>Need Something Special?</h2>
              <p className={styles.customText}>
                We create custom cakes, corporate platters, and catering packages for every occasion.
                Tell us your vision and we'll make it delicious.
              </p>
            </div>
            <a
              href="tel:+15551234567"
              className="btn btn-primary"
              id="custom-order-call-btn"
            >
              📞 Call to Order
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
