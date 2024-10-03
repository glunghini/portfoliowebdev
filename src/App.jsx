import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componentes/Header'
import Miolo from './componentes/Miolo'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Miolo/>
      <Footer/>
    </div>
  )
}

export default App
