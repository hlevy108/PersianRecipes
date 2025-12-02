export default function RecipeCard({ recipe, servings, onServingsChange }) {
  const factor = servings / recipe.baseServings

  function formatQuantity(value) {
    if (value == null || Number.isNaN(value)) return ''
    const rounded = Math.round(value * 100) / 100
    return Number.isInteger(rounded) ? String(rounded) : String(rounded)
  }

  return (
    <article className="card">
      <header className="card__header">
        <h3 className="card__title">{recipe.name}</h3>
        <div className="card__meta">
          <span className="badge">{recipe.time}</span>
          {(recipe.tags || []).map((t) => (
            <span className="badge badge--muted" key={t}>{t}</span>
          ))}
        </div>
      </header>

      <p className="card__desc">{recipe.description}</p>

      <div className="servings">
        <label className="servings__label" htmlFor={`servings-${recipe.id}`}>
          Servings
        </label>
        <input
          id={`servings-${recipe.id}`}
          className="servings__input"
          type="number"
          min={1}
          value={servings}
          onChange={(e) => {
            const next = Number(e.target.value) || recipe.baseServings
            onServingsChange(Math.max(1, next))
          }}
        />
        <span className="servings__base">
          Base: {recipe.baseServings}
        </span>
      </div>

      <div className="ingredients">
        <h4 className="ingredients__title">Ingredients</h4>
        <ul className="ingredients__list">
          {recipe.ingredients.map((ing, idx) => {
            const scaled =
              typeof ing.quantity === 'number' ? ing.quantity * factor : null
            const qtyText =
              scaled == null ? '' : formatQuantity(scaled)
            const unit = ing.unit ? ` ${ing.unit}` : ''
            const qty = qtyText ? `${qtyText}${unit} ` : ''
            return (
              <li key={`${recipe.id}-ing-${idx}`} className="ingredients__item">
                <span className="ingredients__qty">{qty}</span>
                <span className="ingredients__itemname">{ing.item}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <details className="steps">
        <summary className="steps__summary">Steps</summary>
        <ol className="steps__list">
          {recipe.steps.map((step, i) => (
            <li className="steps__item" key={`${recipe.id}-step-${i}`}>
              {step}
            </li>
          ))}
        </ol>
      </details>
    </article>
  )
}


