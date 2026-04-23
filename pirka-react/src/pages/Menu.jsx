import { useState } from 'react'
import DishCard from '../components/DishCard'
import Footer from '../components/Footer'
import './Menu.css'

const MENU = [
  { id: 1,  name: 'Vegetable Momo',   desc: 'Steamed dumplings filled with cabbage, carrots and our house spice mix.',             price: 160,  cat: 'starters',  veg: true  },
  { id: 2,  name: 'Buffalo Momo',     desc: 'Local buffalo-stuffed momos, steamed and served with spicy tomato achar.',                price: 180,  cat: 'starters',  veg: false },
  { id: 3,  name: 'Fried Momo',       desc: 'Deep-fried golden momos. Crispy on the outside, juicy on the inside.',                    price: 200,  cat: 'starters',  veg: false },
  { id: 4,  name: 'Sel Roti & Achar', desc: 'Traditional ring-shaped rice bread served with our homemade sesame achar.',                    price: 120,  cat: 'starters',  veg: true  },
  { id: 5,  name: 'Chatamari',        desc: 'Rice crepe topped with minced meat, egg and fresh herbs. A Newari favourite.',                      price: 220,  cat: 'starters',  veg: false },
  { id: 6,  name: 'Alu Chop',         desc: 'Spiced potato patties, breaded and deep-fried until golden.',                    price: 100,  cat: 'starters',  veg: true  },
  { id: 7,  name: 'Buff Sekuwa',      desc: 'Buffalo meat marinated in traditional spices and grilled over charcoal.',                       price: 350,  cat: 'starters',  veg: false },

  { id: 8,  name: 'Dal Bhat Tarkari', desc: 'The Nepali staple. Lentil soup, rice, seasonal veg and pickle. Refills included.',   price: 250,  cat: 'mains',     veg: true  },
  { id: 9,  name: 'Chicken Curry Set',desc: 'Slow-cooked chicken curry served with rice and seasonal vegetables.',                          price: 380,  cat: 'mains',     veg: false },
  { id: 10, name: 'Vegetable Thukpa', desc: 'Warm noodle soup with fresh vegetables. Perfect for a cold day.',                       price: 200,  cat: 'mains',     veg: true  },
  { id: 11, name: 'Mutton Curry',     desc: 'Tender mutton cooked in a thick spiced gravy. Pairs well with roti.',                     price: 450,  cat: 'mains',     veg: false },
  { id: 12, name: 'Gundruk Saag',     desc: 'Fermented leafy greens sautéed with garlic. A true taste of Nepal.',                          price: 160,  cat: 'mains',     veg: true  },
  { id: 13, name: 'Macha Ko Jhol',    desc: 'Local river fish in a turmeric-rich curry sauce. Served with rice.',              price: 400,  cat: 'mains',     veg: false },

  { id: 14, name: 'Mango Lassi',      desc: 'Chilled yogurt drink blended with sweet mango and a hint of cardamom.',                  price: 130,  cat: 'drinks',    veg: true  },
  { id: 15, name: 'Masala Chiya',     desc: 'Our house-made milk tea brewed with fresh ginger and whole spices.',               price: 60,   cat: 'drinks',    veg: true  },
  { id: 16, name: 'Kagati Pani',      desc: 'Fresh lemon juice with black salt and mint. Very refreshing.',                         price: 90,   cat: 'drinks',    veg: true  },
  { id: 17, name: 'Sugarcane Juice',  desc: 'Freshly pressed sugarcane juice with a bit of ginger and lime.',                              price: 80,   cat: 'drinks',    veg: true  },

  { id: 18, name: 'Yomari',           desc: 'Rice-flour dumplings filled with sweet chaku and sesame. A festival specialty.',                       price: 150,  cat: 'desserts',  veg: true  },
  { id: 19, name: 'Rice Kheer',       desc: 'Creamy rice pudding slow-cooked with cardamom and topped with nuts.',                 price: 120,  cat: 'desserts',  veg: true  },
  { id: 20, name: 'Juju Dhau',        desc: "The famous 'King Curd' from Bhaktapur. Creamy, thick and naturally sweet.",   price: 100,  cat: 'desserts',  veg: true  },
]

const CATEGORIES = [
  { key: 'all',      label: 'All'        },
  { key: 'starters', label: 'Starters'   },
  { key: 'mains',    label: 'Main Course'},
  { key: 'drinks',   label: 'Drinks'     },
  { key: 'desserts', label: 'Desserts'   },
]

const CAT_LABELS = {
  starters: 'Starters & Snacks',
  mains:    'Main Course',
  drinks:   'Drinks',
  desserts: 'Desserts',
}

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [vegOnly, setVegOnly] = useState(false)

  const filtered = MENU.filter(item => {
    const catMatch = activeFilter === 'all' || item.cat === activeFilter
    const vegMatch = !vegOnly || item.veg
    return catMatch && vegMatch
  })

  const categories = activeFilter === 'all'
    ? ['starters', 'mains', 'drinks', 'desserts']
    : [activeFilter]

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span className="section-tag">What We Serve</span>
        <h1 className="section-title">Our Menu</h1>
        <p className="sub">Fresh ingredients, traditional recipes, crafted daily.</p>
      </div>

      <div className="filter-bar">
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`filter-btn ${activeFilter === c.key && !vegOnly ? 'active' : ''}`}
            onClick={() => { setActiveFilter(c.key); setVegOnly(false) }}
          >
            {c.label}
          </button>
        ))}
        <button
          className={`filter-btn veg-btn ${vegOnly ? 'active' : ''}`}
          onClick={() => { setVegOnly(v => !v); setActiveFilter('all') }}
        >
          <span className="veg-indicator" /> Veg Only
        </button>
      </div>

      <div className="menu-section">
        {categories.map(cat => {
          const items = filtered.filter(i => i.cat === cat)
          if (!items.length) return null
          return (
            <div className="menu-category" key={cat}>
              <div className="menu-cat-title">
                <span className="dash">—</span> {CAT_LABELS[cat]}
              </div>
              <div className="menu-grid">
                {items.map(item => (
                  <DishCard
                    key={item.id}
                    name={item.name}
                    description={item.desc}
                    price={item.price}
                    isVeg={item.veg}
                    imgLabel={item.name}
                    imgHeight={140}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}
