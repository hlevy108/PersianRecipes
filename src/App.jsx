import { useMemo, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import RecipeList from './components/RecipeList.jsx'
import { recipes as allRecipes, searchRecipes } from './data/recipes.js'

function App() {
  const [query, setQuery] = useState('')
  const [servingsById, setServingsById] = useState(() => {
    const initial = {}
    for (const r of allRecipes) {
      initial[r.id] = r.baseServings
    }
    return initial
  })

  const filtered = useMemo(
    () => searchRecipes(allRecipes, query),
    [query]
  )

  function handleChangeServings(id, next) {
    setServingsById((prev) => ({ ...prev, [id]: next }))
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Persian Recipes</h1>
        <p className="subtitle">Classic Persian dishes with easy supermarket ingredients.</p>
        <SearchBar value={query} onChange={setQuery} />
      </header>
      <main>
        <RecipeList
          recipes={filtered}
          servingsById={servingsById}
          onChangeServings={handleChangeServings}
        />
      </main>
      <footer className="footer">
        <small>Tip: Search by recipe, ingredient, or tag (e.g., "vegetarian").</small>
      </footer>
    </div>
  )
}

export default App
