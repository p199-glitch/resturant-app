import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',        label: 'Home'    },
  { to: '/menu',    label: 'Menu'    },
  { to: '/about',   label: 'About'   },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Reserve' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleNav = (to) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <nav className="navbar">
      <span className="nav-logo" onClick={() => handleNav('/')}>
        <span>Pirka</span> Khaja Ghar
      </span>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <span key={l.to} onClick={() => handleNav(l.to)}>{l.label}</span>
          ))}
        </div>
      )}
    </nav>
  )
}
