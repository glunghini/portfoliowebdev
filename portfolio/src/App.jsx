import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <main className='p-4'>
        <h2 className='text-2xl'>Bem-Vindo</h2>
      </main>
    </div>
  )
}

export default App
