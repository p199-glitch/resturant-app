import { useNavigate } from 'react-router-dom'
import './StickyCTA.css'

export default function StickyCTA() {
  const navigate = useNavigate()
  return (
    <div className="sticky-cta">
      <a href="tel:+97714210000" className="btn btn-outline">Call Us</a>
      <button className="btn" onClick={() => navigate('/contact')}>Reserve Table</button>
    </div>
  )
}
