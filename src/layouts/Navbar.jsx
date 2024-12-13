import { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Navbar() {

  const [query, setQuery] = useState('')
  const { fetchData } = useContext(GlobalContext)

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      fetchData(query); // Passa il valore della query alla funzione
    }
  }


  return (
    <nav>
      <form className="form-header" onSubmit={handleSearch} action=" ">
        <label htmlFor="search">Ricerca film o serie TV</label>
        <input type="text"
          id="search"
          name="search"
          placeholder="    titolo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>
    </nav>
  )
}