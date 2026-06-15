import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import aboutImg from '../../assets/images/about.png'
import styles from './About.module.css'

const timeline = [
  { year: '2010', title: 'The First Loaf', desc: 'Emma Williams bakes her first sourdough in a rented kitchen. A small farmers\' market stall quickly becomes the talk of the neighbourhood.' },
  { year: '2013', title: 'Opening Day', desc: 'Sweet Hearth Bakery opens its doors at 42 Hearth Lane. The queue stretched around the block on opening morning.' },
  { year: '2016', title: 'Growing the Team', desc: 'We hire our first pastry chef, Chef Antoine, bringing French-trained expertise to our croissant and cake program.' },
  { year: '2019', title: 'Community Hub', desc: 'Sweet Hearth hosts its first bread-baking workshop. Over 500 community members have since learned the art of sourdough with us.' },
  { year: '2023', title: 'Best Local Bakery', desc: 'Voted "Best Local Bakery" by City Food Magazine for the third year running. We\'re humbled and keep our heads down, baking.' },
]

const team = [
  {
    name: 'Emma Williams',
    role: 'Founder & Head Baker',
    avatar: 'EW',
    bio: 'Self-taught bread obsessive turned professional baker. Emma\'s 72-hour sourdough recipe is what started it all.',
  },
  {
    name: 'Antoine Moreau',
    role: 'Pastry Chef',
    avatar: 'AM',
    bio: 'Trained at Le Cordon Bleu Paris, Antoine brings rigorous French technique to every croissant, danish, and tart.',
  },
  {
    name: 'Lily Chen',
    role: 'Cake Designer',
    avatar: 'LC',
    bio: 'With an eye for elegance and a talent for flavour, Lily transforms custom cake visions into edible masterpieces.',
  },
]

const values = [
  { icon: '🌿', title: 'Natural Ingredients', desc: 'Zero artificial preservatives, additives, or shortcuts. Real food, real flavour.' },
  { icon: '🤝', title: 'Community First', desc: 'We source from local farms, hire locally, and give back through workshops and donations.' },
  { icon: '♻️', title: 'Sustainable Practices', desc: 'Compostable packaging, zero food-waste partnerships, and energy-efficient baking.' },
  { icon: '🎓', title: 'Knowledge Sharing', desc: 'Monthly baking classes open to all ages. We believe everyone deserves to know how bread is made.' },
]

export default function About() {
  useScrollAnimation()

  return (
    <div className="page-wrapper">

      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Who We Are</span>
          <h1 className={`heading-display ${styles.pageTitle}`}>Our Story</h1>
          <p className={styles.pageSubtitle}>
            A family bakery built on passion, patience, and the belief that good bread makes life better.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section-padding ${styles.story}`}>
        <div className="container">
          <div className={`grid-2 ${styles.storyGrid}`}>
            <div className={`${styles.storyImageCol} fade-in`}>
              <img
                src={aboutImg}
                alt="The interior of Sweet Hearth Bakery"
                className={styles.storyImage}
                loading="lazy"
              />
            </div>
            <div className={`${styles.storyContent} fade-in-up`}>
              <span className="section-label">The Beginning</span>
              <h2 className="heading-section">From a Home Kitchen to a Neighbourhood Institution</h2>
              <div className="divider" />
              <p>
                Sweet Hearth Bakery began in 2010 when Emma Williams, a schoolteacher with a bread obsession, 
                started baking sourdough in her home kitchen. What began as gifts for friends and family 
                quickly outgrew her countertop.
              </p>
              <p>
                After a year of farmers' market weekends and a 3 AM alarm clock, Emma took the leap. 
                She rented a small commercial kitchen, perfected her signature 72-hour sourdough, 
                and opened the doors of Sweet Hearth Bakery on a rainy Tuesday in March 2013.
              </p>
              <p>
                The queue on opening day told her everything she needed to know. Today, Sweet Hearth 
                serves over 2,000 customers a month and has become the kind of place people bring 
                their kids, then their grandkids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section-padding ${styles.timelineSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <span className="section-label">Milestones</span>
            <h2 className="heading-section">Our Journey</h2>
            <div className="divider" style={{ margin: 'var(--space-4) auto var(--space-6)' }} />
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right} fade-in-up`}>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section-padding ${styles.teamSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <span className="section-label">Meet the Bakers</span>
            <h2 className="heading-section">The People Behind the Bread</h2>
            <div className="divider" style={{ margin: 'var(--space-4) auto var(--space-6)' }} />
          </div>
          <div className={`grid-3 ${styles.teamGrid}`}>
            {team.map(member => (
              <div key={member.name} className={`card ${styles.teamCard} fade-in-up`}>
                <div className={styles.teamAvatar}>{member.avatar}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section-padding ${styles.valuesSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <span className="section-label">What We Stand For</span>
            <h2 className="heading-section">Our Values</h2>
            <div className="divider" style={{ margin: 'var(--space-4) auto var(--space-6)' }} />
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className={`${styles.valueCard} fade-in-up`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
