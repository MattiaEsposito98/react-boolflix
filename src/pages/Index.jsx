import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"


export default function Index() {
  const { movies, setMovies, fetchFilms, query } = useContext(GlobalContext)


  useEffect(() => {
    setMovies([]) //svuoto l'array per la nuova ricerca
    fetchFilms(query)
  }, [query])


  // if (query === undefined) {
  //   return <p>Cerca un film o una serie tv</p>
  // }

  return (
    <main>
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            {`titolo: ${movie.title}`}
            <div>
              {`Lingua originale: ${movie.original_language}`}
            </div>
            <div>
              {`Titolo originale: ${movie.original_title}`}
            </div>
            <div>
              {`Voto: ${movie.vote_average}`}
            </div>



          </li>


        ))}
      </ul>
    </main>
  )

}





