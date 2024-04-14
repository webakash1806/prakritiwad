import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Page/About'
import PostAdd from './Page/PostAdd'
import Contact from './Page/Contact'
import Login from './Page/SignUp/Login'
import SignUp from './Page/SignUp/SignUp'
import ComingSoon from './Page/ComingSoon'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-between min-h-[100vh]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add/post' element={<PostAdd />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coming" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
