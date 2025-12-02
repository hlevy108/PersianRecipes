import RecipeCard from './RecipeCard.jsx'

export default function RecipeList({ recipes, servingsById, onChangeServings }) {
  if (!recipes.length) {
    return <p className="empty">No recipes match your search.</p>
  }
  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          recipe={r}
          servings={servingsById[r.id] ?? r.baseServings}
          onServingsChange={(n) => onChangeServings(r.id, n)}
        />
      ))}
    </div>
  )
}


