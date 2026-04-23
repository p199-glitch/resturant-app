import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import './Gallery.css'

const ITEMS = [
  { id: 0, label: 'Food — Steamed Momos',   tall: true  },
  { id: 1, label: 'Interior — Dining Hall', tall: false },
  { id: 2, label: 'Food — Dal Bhat Set',    tall: false },
  { id: 3, label: 'Restaurant — Courtyard', wide: true  },
  { id: 4, label: 'Food — Buff Sekuwa',     tall: false },
  { id: 5, label: 'Kitchen — Preparation',  tall: false },
  { id: 6, label: 'Food — Chatamari',       tall: false },
  { id: 7, label: 'Event — Tihar Festival', tall: true  },
  { id: 8, label: 'Food — Yomari',          tall: false },
  { id: 9, label: 'Dining Area — Evening',  tall: false },
]

export default function Gallery() {
  const [idx, setIdx] = useState(null)
  const isOpen = idx !== null

  const open  = (i) => setIdx(i)
  const close = ()  => setIdx(null)
  const prev  = ()  => setIdx(i => (i - 1 + ITEMS.length) % ITEMS.length)
  const next  = ()  => setIdx(i => (i + 1) % ITEMS.length)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span className="section-tag">A Visual Feast</span>
        <h1 className="section-title">Gallery</h1>
        <p className="sub">Food, ambiance, and moments from Pirka Khaja Ghar.</p>
      </div>

      <div className="gallery-grid">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className={`gallery-item${item.tall ? ' tall' : ''}${item.wide ? ' wide' : ''}`}
            onClick={() => open(item.id)}
          >
            <div
              className="img-ph"
              style={{ height: item.tall ? '100%' : 220, minHeight: item.tall ? 460 : 220 }}
            >
              <span>{item.label}</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-icon">+</div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-backdrop" onClick={close}>
          <button className="lb-close" onClick={close}>&#x2715;</button>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <div className="img-ph lb-img">
              <span>{ITEMS[idx].label}</span>
            </div>
          </div>
          <div className="lb-nav" onClick={e => e.stopPropagation()}>
            <button className="lb-btn" onClick={prev}>&larr; Prev</button>
            <span className="lb-counter">{idx + 1} / {ITEMS.length}</span>
            <button className="lb-btn" onClick={next}>Next &rarr;</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
