import React from 'react'
export default function TechnologyCard({ technology, isAdded, onAdd }) {
  const { name, icon, badge, description, category, difficulty, rating } = technology;

  return (
    <article className={`technology-card${isAdded ? ' added' : ''}`}>
      <div className="card-top">
        <img className="tech-icon" src={icon} alt="" />
        {badge ? <span className="badge">{badge}</span> : null}
      </div>
      <h3>{name}</h3>
      <p className="tech-description">{description}</p>
      <div className="card-meta">
        <span className="chip">{category}</span>
        <span className="difficulty">{difficulty}</span>
        <span className="rating">★ {Number(rating).toFixed(1)}</span>
      </div>
      <button
        className={`add-button${isAdded ? ' added' : ''}`}
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}
