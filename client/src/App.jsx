import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header'
import Carousel from './Page/Team'
import About from './Page/About'
const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
