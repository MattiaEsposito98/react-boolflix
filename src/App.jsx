import { GlobalProvider } from "./context/GlobalContext"
import Header from "./layouts/Header"
import Index from "./pages/Index"

function App() {


  return (
    <GlobalProvider>
      <Header />
      <Index />
    </ GlobalProvider>
  )
}

export default App
