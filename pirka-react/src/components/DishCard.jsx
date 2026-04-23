import './DishCard.css'

export default function DishCard({ name, description, price, isVeg, imgLabel, imgHeight = 180 }) {
  return (
    <div className="dish-card">
      <div className="img-ph" style={{ height: imgHeight }}>
        <span>{imgLabel || name}</span>
      </div>
      <div className="dish-info">
        <div className="dish-name">{name}</div>
        <div className="dish-desc">{description}</div>
        <div className="dish-footer">
          <span className="dish-price">Rs. {price}</span>
          {isVeg !== undefined && (
            <span className={`veg-dot ${isVeg ? 'veg' : 'non-veg'}`} title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'} />
          )}
        </div>
      </div>
    </div>
  )
}
