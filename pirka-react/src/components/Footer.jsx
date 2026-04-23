import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const go = (path) => navigate(path)

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo"><span>Pirka</span> Khaja Ghar</div>
          <p className="footer-desc">
            Serving authentic Nepali flavours with love and tradition since 2008.
            Come hungry, leave happy.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => go('/')}>Home</li>
            <li onClick={() => go('/menu')}>Menu</li>
            <li onClick={() => go('/about')}>About Us</li>
            <li onClick={() => go('/gallery')}>Gallery</li>
            <li onClick={() => go('/contact')}>Reserve</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Thamel, Kathmandu</li>
            <li>+977 1 421 0000</li>
            <li>hello@pirkakhajaghar.com</li>
            <li>Sun–Fri: 10am – 9pm</li>
            <li>Sat: 11am – 10pm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Pirka Khaja Ghar. All rights reserved.</span>
        <span>Made with care in Kathmandu</span>
      </div>
    </footer>
  )
}
