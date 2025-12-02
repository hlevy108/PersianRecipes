import { useId } from 'react'

export default function SearchBar({ value, onChange }) {
  const id = useId()
  return (
    <div className="searchbar">
      <label className="searchbar__label" htmlFor={id}>Search recipes</label>
      <input
        id={id}
        className="searchbar__input"
        type="search"
        placeholder="Search by name, ingredient, or tag…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  )
}


