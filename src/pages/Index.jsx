import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"


export default function Index() {
  const { movies, setMovies, fetchFilms, query } = useContext(GlobalContext)


  useEffect(() => {
    setMovies([]) //svuoto l'array per la nuova ricerca
    fetchFilms(query)
  }, [query])


  // if (query === undefined || query === '') {
  //   return <p>Cerca un film o una serie tv</p>
  // }

  return (
    <main>
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            {`titolo: ${movie.title}`}
            <div>
              {`titolo originale:${movie.original_title}`}
            </div>
            <div>
              {movie.original_language === "en" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/1217765834/it/foto/bandiera-del-regno-unito-che-soffia-nel-vento.jpg?s=612x612&w=is&k=20&c=XLaBAAqzlIUE4C3iByijfI8g8Qa7BrSyw5bnPUf8p10=" />
              ) : movie.original_language === "it" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/499811047/it/foto/bandiera-dellitalia.jpg?s=612x612&w=is&k=20&c=OnFREVw0Lz9DCUK_ZT1TT98Gae9XgeusBqcMIo_Q0XI=" />
              ) : (
                <p>Titolo originale: {movie.original_language}</p>
              )}
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





