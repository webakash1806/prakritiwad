import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Page/About'
import PostAdd from './Page/PostAdd'
import Contact from './Page/Contact'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add/post' element={<PostAdd />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
