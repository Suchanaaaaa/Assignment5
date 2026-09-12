import React from 'react'
export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  const countText = stack.length === 0
    ? 'No technology selected yet.'
    : `${stack.length} Technology${stack.length === 1 ? 'y' : 'ies'} Selected`;

  return (
    <aside className="stack-panel">
      <h2>Your Stack</h2>
      <p className="stack-count">{countText}</p>

      {!stack.length ? (
        <div className="empty-stack"><p>Your stack is empty.</p></div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div className="stack-item-text">
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </div>
                <button
                  className="remove-button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => onRemove(item.id)}
                >×</button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}
