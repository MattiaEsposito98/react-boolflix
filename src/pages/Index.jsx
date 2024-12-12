// import { useContext, useEffect } from "react"
// import GlobalContext from "../context/GlobalContext"


// export default function Index() {
//   const { movies, setMovies, fetchFilms, query } = useContext(GlobalContext)


//   useEffect(() => {
//     setMovies([]) //svuoto l'array per la nuova ricerca
//     fetchFilms(query)
//   }, [query])


//   return (
//     <main>
//       <ul>
//         {movies.map((movie, i) => (
//           <li key={i}>
//             {movie.title !== undefined ? `titolo: ${movie.title}` : movie.name}
//             <div>
//               {movie.original_title !== undefined ? `titolo originale:${movie.original_title}` : movie.original_name}
//             </div>
//             <div>
//               {movie.original_language === "en" ? (
//                 <img className="img-flag"
//                   src="https://media.istockphoto.com/id/1217765834/it/foto/bandiera-del-regno-unito-che-soffia-nel-vento.jpg?s=612x612&w=is&k=20&c=XLaBAAqzlIUE4C3iByijfI8g8Qa7BrSyw5bnPUf8p10=" />
//               ) : movie.original_language === "it" ? (
//                 <img className="img-flag"
//                   src="https://media.istockphoto.com/id/499811047/it/foto/bandiera-dellitalia.jpg?s=612x612&w=is&k=20&c=OnFREVw0Lz9DCUK_ZT1TT98Gae9XgeusBqcMIo_Q0XI=" />
//               ) : movie.original_language === "ja" ? (
//                 <img className="img-flag"
//                   src="https://media.istockphoto.com/id/983149640/it/foto/bandiera-del-giappone-che-sventola-sfondo.jpg?s=612x612&w=is&k=20&c=61hgh329sOoQTLfif42jf2LpCprVeq9Uu0WFtFUc65U=" />
//               ) : (
//                 <p>Lingua originale: {movie.original_language}</p>
//               )}
//             </div>
//             <div>
//               {`Voto: ${movie.vote_average}`}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </main>
//   )

// }


import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"
import Card from "../components/Card"

export default function Index() {
  const { movies, setMovies, fetchFilms, query } = useContext(GlobalContext)


  useEffect(() => {
    setMovies([]) //svuoto l'array per la nuova ricerca
    fetchFilms(query)
  }, [query])


  return (
    <main className="container">
      <ul className="row">
        {movies.map((movie, i) => (
          <li className="col" key={i}>
            <Card
              title={movie.title || movie.name}

              original_language={movie.original_language === "en" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/1217765834/it/foto/bandiera-del-regno-unito-che-soffia-nel-vento.jpg?s=612x612&w=is&k=20&c=XLaBAAqzlIUE4C3iByijfI8g8Qa7BrSyw5bnPUf8p10=" />
              ) : movie.original_language === "it" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/499811047/it/foto/bandiera-dellitalia.jpg?s=612x612&w=is&k=20&c=OnFREVw0Lz9DCUK_ZT1TT98Gae9XgeusBqcMIo_Q0XI=" />
              ) : movie.original_language === "ja" ? (
                <img className="img-flag"
                  src="https://media.istockphoto.com/id/983149640/it/foto/bandiera-del-giappone-che-sventola-sfondo.jpg?s=612x612&w=is&k=20&c=61hgh329sOoQTLfif42jf2LpCprVeq9Uu0WFtFUc65U=" />
              ) : (
                <p>Lingua originale: {movie.original_language}</p>
              )}

              original_title={movie.title || movie.name}

              vote={`Voto: ${movie.vote_average}`}
            />

          </li>
        ))}
      </ul>
    </main>
  )

}








