import { useNavigate } from 'react-router-dom'
import DishCard from '../components/DishCard'
import Footer from '../components/Footer'
import './Home.css'

const FEATURED = [
  { name: 'Steamed Momos',    description: 'Handmade dumplings stuffed with spiced buffalo & vegetables, served with achar.', price: 180, isVeg: false },
  { name: 'Dal Bhat Tarkari', description: 'Traditional set meal with lentil soup, rice, seasonal vegetables & pickle.',       price: 250, isVeg: true  },
  { name: 'Buff Sekuwa',      description: 'Marinated buffalo grilled over charcoal, a Newari classic bursting with spice.',   price: 350, isVeg: false },
  { name: 'Sel Roti & Achar', description: 'Crispy ring-shaped rice bread paired with homemade tomato-sesame achar.',         price: 120, isVeg: true  },
]

const HIGHLIGHTS = [
  { num: '15+', label: 'Years of Flavour' },
  { num: '40+', label: 'Dishes on Menu'   },
  { num: '500+',label: 'Happy Guests Daily'},
]

const WHY = [
  { title: 'Fresh & Local',       body: 'We source vegetables directly from farmers in Bhaktapur and Sindhupalchok every morning. No frozen shortcuts.' },
  { title: 'Authentic Recipes',   body: 'Our recipes have been passed down through three generations of the Shrestha family — unchanged, unmistakable.' },
  { title: 'Warm Hospitality',    body: 'At Pirka, every guest is welcomed like family. Our team goes out of their way to make your meal memorable.' },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="page-enter">

      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Traditional Nepali Kitchen — Since 2008</p>
          <h1 className="hero-title">
            Traditional Nepali Flavours in the Heart of Thamel
          </h1>
          <p className="hero-sub">
            From steaming momos to our signature dal-bhat-tarkari, we serve 
            fresh, authentic Nepali meals made from family recipes.
          </p>
          <div className="hero-btns">
            <button className="btn" onClick={() => navigate('/menu')}>Explore the Menu</button>
            <button className="btn btn-outline" onClick={() => navigate('/contact')}>Find Us</button>
          </div>
        </div>
        <div className="hero-img">
          <div className="img-ph" style={{ height: 540, borderRadius: 4 }}>
            <span>A Plate of Our Momos</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-inner">
          {HIGHLIGHTS.map(h => (
            <div className="highlight-item" key={h.num}>
              <div className="highlight-num">{h.num}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-header">
          <div>
            <span className="section-tag">Menu Highlights</span>
            <h2 className="section-title">Popular Choices</h2>
          </div>
          <button className="btn btn-outline" onClick={() => navigate('/menu')}>View Full Menu</button>
        </div>
        <div className="dish-grid">
          {FEATURED.map(d => (
            <DishCard key={d.name} {...d} imgLabel={d.name} imgHeight={180} />
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-inner">
          <div className="why-img">
            <div className="img-ph" style={{ height: 420, borderRadius: 4 }}>
              <span>Our Courtyard</span>
            </div>
          </div>
          <div className="why-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Fresh Ingredients, Every Day</h2>
            {WHY.map((w, i) => (
              <div className="why-feature" key={i}>
                <h4><span className="dot" />  {w.title}</h4>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
