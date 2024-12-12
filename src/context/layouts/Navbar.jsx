export default function Navbar() {
  return (
    <nav>
      <form action=" ">
        <label htmlFor="search">Ricerca film o serie TV</label>
        <input type="text"
          id="search"
          name="search"
          placeholder="titolo"
          value={FormData.title} />
        <button>Cerca</button>
      </form>
    </nav>
  )
}