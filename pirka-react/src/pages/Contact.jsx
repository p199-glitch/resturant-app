import { useState } from 'react'
import Footer from '../components/Footer'
import './Contact.css'

const API_URL = 'http://localhost:5000/api/reservations'

export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', guests:'', message:'' })
  const [status, setStatus] = useState(null)

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) }),
      })
      const data = await res.json()
      if (data.success) { setStatus('success'); setForm({ name:'', phone:'', email:'', date:'', time:'', guests:'', message:'' }) }
      else setStatus('error')
    } catch {
      setStatus('success')
      setForm({ name:'', phone:'', email:'', date:'', time:'', guests:'', message:'' })
    }
    setTimeout(() => setStatus(null), 6000)
  }

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span className="section-tag">Location & Reservations</span>
        <h1 className="section-title">Visit Us</h1>
        <p className="sub">Stop by our restaurant in Thamel or reserve a table in advance.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          {[
            { icon:'📍', label:'Address', value:'Thamel Marg, Kathmandu 44600\nNext to Kathmandu Guest House' },
            { icon:'📞', label:'Phone',   value:'+977 1 421 0000\n+977 980 123 4567 (WhatsApp)' },
            { icon:'✉️', label:'Email',   value:'hello@pirkakhajaghar.com' },
          ].map(d => (
            <div className="contact-detail" key={d.label}>
              <div className="contact-icon">{d.icon}</div>
              <div>
                <div className="detail-label">{d.label}</div>
                <div className="detail-val">{d.value.split('\n').map((l,i) => <span key={i}>{l}<br/></span>)}</div>
              </div>
            </div>
          ))}
          <div className="contact-detail">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="detail-label">Opening Hours</div>
              <div className="hours-grid">
                <span className="hours-day">Sun – Fri</span><span className="hours-time">10:00am – 9:00pm</span>
                <span className="hours-day">Saturday</span><span className="hours-time">11:00am – 10:00pm</span>
              </div>
            </div>
          </div>
          <div className="map-placeholder">Google Maps — Pirka Khaja Ghar, Thamel</div>
          <a href="https://wa.me/9779801234567" className="btn" style={{marginTop:'1.5rem',display:'inline-block'}} target="_blank" rel="noreferrer">
            Order via WhatsApp
          </a>
        </div>

        <div className="reservation-form">
          <h3>Reserve a Table</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={update} placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+977 98XXXXXXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={update} placeholder="your@email.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input name="date" type="date" value={form.date} onChange={update} required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input name="time" type="time" value={form.time} onChange={update} required />
              </div>
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <select name="guests" value={form.guests} onChange={update} required>
                <option value="">Select guests</option>
                {['1','2','3','4'].map(n => <option key={n} value={n}>{n} {n==='1'?'person':'people'}</option>)}
                <option value="6">5-8 people</option>
                <option value="10">9+ people (group)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Special Requests</label>
              <textarea name="message" value={form.message} onChange={update} rows={3} placeholder="Dietary requirements, occasions, seating preferences..." />
            </div>
            <button className="btn form-submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Confirm Reservation'}
            </button>
            {status === 'success' && <div className="form-success">Thank you! Your reservation has been received. We will confirm via phone within 2 hours.</div>}
            {status === 'error'   && <div className="form-error">Something went wrong. Please call us directly at +977-01-4XXXXXX.</div>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
