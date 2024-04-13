import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
