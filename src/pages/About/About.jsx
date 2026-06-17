import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import aboutImg from '../../assets/images/about.png'
import styles from './About.module.css'

const timeline = [
  { year: '2010', title: 'The First Batch', desc: 'Meenakshi Iyer begins baking at home — plum cakes for Christmas, cardamom cookies for Diwali. Neighbours start placing orders before the tray even cools.' },
  { year: '2013', title: 'Opening Day', desc: 'Sweet Hearth Bakery opens on NSR Road. By 9 AM on the first morning, the display case was empty. They baked twice that day.' },
  { year: '2016', title: 'Growing the Team', desc: 'Rajan joins as head pastry chef, bringing hotel-trained precision to the croissant and cake program. The custom cake orders triple within a year.' },
  { year: '2019', title: 'Community Kitchen', desc: 'We start hosting weekend baking sessions for home bakers. Over 400 people have since learned to bake with us — many of them now regulars at the counter.' },
  { year: '2023', title: 'Best Local Bakery', desc: 'Voted "Best Local Bakery" by The Food Route for the third consecutive year. We\'re grateful, and still baking the same way we always have.' },
]

const team = [
  {
    name: 'Meenakshi Iyer',
    role: 'Founder & Head Baker',
    avatar: 'MI',
    bio: 'A home baker who never meant to open a shop. Meenakshi\'s cardamom-laced plum cake is still the first thing people ask for when they walk in.',
  },
  {
    name: 'Rajan Krishnamurthy',
    role: 'Pastry Chef',
    avatar: 'RK',
    bio: 'Trained across hotel kitchens in Chennai and Bangalore, Rajan brings professional rigour to every laminated dough and layered tart at Sweet Hearth.',
  },
  {
    name: 'Divya Suresh',
    role: 'Cake Designer',
    avatar: 'DS',
    bio: 'Divya has an eye for detail that borders on obsession. Every custom cake she designs is built around the customer\'s story, not just their brief.',
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
                Sweet Hearth Bakery began the way most honest things do — without a plan. In 2010, 
                Meenakshi Iyer, a software professional who had quietly fallen in love with baking, 
                started making plum cakes and cookies for neighbours during the festival season. 
                Word got around the way it does in a close-knit neighbourhood, and soon people were 
                knocking on her door in July asking about Christmas cake.
              </p>
              <p>
                For three years she baked between weekends and late evenings, saved up, and made the 
                decision that terrified her: she would open a shop. Sweet Hearth Bakery opened on 
                NSR Road in 2013 with a small display case, mismatched chairs, and the smell of 
                butter and cardamom drifting onto the street.
              </p>
              <p>
                The display case was empty by 9 AM on opening day. It has rarely been full past noon 
                since. Today, Sweet Hearth serves thousands of customers a month and has become the 
                kind of place people visit out of habit, then out of love.
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
