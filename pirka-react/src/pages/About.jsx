import Footer from '../components/Footer'
import './About.css'

const VALUES = [
  { title: 'Pure Tradition', body: 'We stick to the original recipes and techniques passed down through our family.' },
  { title: 'Local Sourcing', body: 'Our ingredients come from local markets and farmers we\'ve known for years.' },
  { title: 'Home Comfort',    body: 'We want every guest to feel the same warmth as a home-cooked meal in Bhaktapur.' },
  { title: 'Fresh Daily',    body: 'No frozen stock or shortcuts. We prepare everything fresh, every single morning.' },
]

export default function About() {
  return (
    <div className="page-enter">

      <section className="about-hero">
        <div className="about-hero-img">
          <div className="img-ph" style={{ height: '100%', minHeight: 480 }}>
            <span>Our Restaurant</span>
          </div>
        </div>
        <div className="about-hero-text">
          <span className="section-tag">Since 2008</span>
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>
            The Story of Pirka Khaja Ghar
          </h1>
          <p className="about-intro">
            What started as a small kitchen in Bhaktapur has grown into a space where 
            we share the authentic flavours of our home with everyone who walks through our doors.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-sticky">
          <span className="section-tag">Our History</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Rooted in Bhaktapur
          </h2>
          <div className="img-ph" style={{ height: 280, borderRadius: 4, marginTop: '2rem' }}>
            <span>Our Early Days</span>
          </div>
        </div>
        <div className="about-story-text">
          <p>It began in Thamel, where we first started serving Devi Shrestha's recipes to a few regulars. People came for the momos but stayed for the honest, home-cooked feel of the food.</p>
          <p>By 2010, we moved to our current location — a traditional house with wooden carvings and a quiet courtyard that reminds us of the old streets of Bhaktapur.</p>
          <p>Today, the Shrestha family still runs the kitchen. While the city around us has changed, our recipes and our commitment to traditional Nepali cooking remain exactly the same.</p>
          <p>Whether you're a local coming for your daily dal-bhat or a traveller trying your first authentic Newari dish, we're here to make sure you're well-fed and welcome.</p>

          <h3 className="values-heading">How We Work</h3>
          <div className="values-grid">
            {VALUES.map(v => (
              <div className="value-card" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chef-section">
        <div className="chef-header">
          <span className="section-tag">Meet the Team</span>
          <h2 className="section-title">The Heart of Our Kitchen</h2>
        </div>
        <div className="chef-inner">
          <div className="chef-img">
            <div className="img-ph" style={{ height: 360, borderRadius: 4 }}>
              <span>Chef Photo</span>
            </div>
          </div>
          <div className="chef-bio">
            <div className="chef-name">Chef Sushila Shrestha</div>
            <div className="chef-title">Head Chef & Co-Founder</div>
            <p>Sushila learned to cook at her grandmother's side in Bhaktapur, mastering the slow rhythm of Newari cuisine — the careful balance of spices, the patience of slow-cooked curries, the precision of perfect momos.</p>
            <p>She trained further in Darjeeling before returning to Kathmandu to open Pirka. Her philosophy is simple: cook the way you would for someone you love.</p>
            <p>In 2019, Sushila was featured in Nepali Times as one of the ten most influential women shaping Kathmandu's food culture.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
