import { useState } from 'react'
import Header from './componentes/Header'
import Miolo from './componentes/Miolo'
import Footer from './componentes/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './componentes/Contato'
import Projetos from './componentes/Projetos'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={
          <>
          <Header/>
          <Miolo/>
          <Footer/>
          </>
        }/>
        <Route path = '/Projetos' element = {
          <>
          <Header/>
          <Projetos/>
          <Footer/>
          </>
        }/>
        <Route path='/Contato' element = {
          <>
            <Header/>
            <Contato/>
            <Footer/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
