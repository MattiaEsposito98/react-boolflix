import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')

  function fetchData(query) {
    console.log('FetchFilms chiamato con query:', query);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3568031daf2b81e88ef38510b7355833&query=${encodeURIComponent(query)}`)
      // è una funzione JavaScript che codifica una stringa per essere utilizzata in un URL covertendo gli spazi e caratteri speciali
      .then(res => {
        setMovies(res.data.results)
        console.log('Risultati dell\'API:', res.data.results)
      })
      .catch(err => {
        console.error("Errore durante il fetch del film", err)
      })

    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=3568031daf2b81e88ef38510b7355833&query=${encodeURIComponent(query)}`)
      .then(res => {
        const mappedSeries = res.data.results.map(item => {
          return {
            ...item,
            title: item.name,
            original_title: item.original_name
          }
        })
        setSeries(mappedSeries)
      }).catch(err => {
        console.error("Errore durante il fetch della serie", err)
      })
  }

  const totalResults = [...movies, ...series] //somma degli array

  return (
    <GlobalContext.Provider value={{ query, setQuery, movies, setMovies, fetchData, totalResults }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext