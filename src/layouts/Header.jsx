import Navbar from "./Navbar"

export default function Header() {
  function Home() {
    location.reload()
  }


  return (
    <header >
      <div className="logo" onClick={Home}>
        BOOLFIX
      </div>
      <Navbar />
    </header>
  )
}