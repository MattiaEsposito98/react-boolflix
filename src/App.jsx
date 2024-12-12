import { GlobalProvider } from "./context/GlobalContext"
import Header from "./layouts/Header"

function App() {


  return (
    <GlobalProvider>
      <Header />

    </ GlobalProvider>
  )
}

export default App
