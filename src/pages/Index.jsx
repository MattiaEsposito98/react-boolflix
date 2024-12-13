import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"
import Card from "../components/Card"

export default function Index() {
  const { movies, setMovies, fetchData, query, totalResults } = useContext(GlobalContext)


  useEffect(() => {
    setMovies([]) //svuoto l'array per la nuova ricerca
    fetchData(query)
  }, [query])


  return (
    <main className="container">
      <ul className="row">
        {totalResults.map((movie) => (
          <li className="col" key={movie.id}>
            <Card
              image={movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : `https://media.istockphoto.com/id/2158077202/it/foto/close-up-of-a-glossy-red-button-featuring-a-prominent-white-cross-symbolizing-error-or.jpg?s=2048x2048&w=is&k=20&c=_CE8W6l5Iwe1mHXKK_wJnrmrH7ECvHGTzEVwcRbksaI=`}
              title={movie.title}

              original_language={movie.original_language === "en" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/1217765834/it/foto/bandiera-del-regno-unito-che-soffia-nel-vento.jpg?s=612x612&w=is&k=20&c=XLaBAAqzlIUE4C3iByijfI8g8Qa7BrSyw5bnPUf8p10=" />
              ) : movie.original_language === "it" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/499811047/it/foto/bandiera-dellitalia.jpg?s=612x612&w=is&k=20&c=OnFREVw0Lz9DCUK_ZT1TT98Gae9XgeusBqcMIo_Q0XI=" />
              ) : movie.original_language === "ja" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/983149640/it/foto/bandiera-del-giappone-che-sventola-sfondo.jpg?s=612x612&w=is&k=20&c=61hgh329sOoQTLfif42jf2LpCprVeq9Uu0WFtFUc65U=" />
              ) : movie.original_language === "fr" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/510973709/it/foto/primo-piano-della-bandiera-della-francia.jpg?s=612x612&w=is&k=20&c=q9EjOk8Jg4mIX-0HhXn4kzRRwzzi2BLpg5dhnRK9AgY=" />
              ) : (
                <p>Lingua originale: {movie.original_language}</p>
              )}

              original_title={movie.original_title}
              vote={movie.vote_average}
            />

          </li>
        ))}
      </ul>
    </main>
  )

}








