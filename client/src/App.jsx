import React, { useEffect } from 'react'
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
import PostPage from './Page/PostPage'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import VideoPage from './Page/Videos/VideoPage'
import PostPageDown from './Page/PostPageDown'
import GhatnaPage from './Page/GhatnaPage'
import Patrika from './Page/Patrika'
import CreatePost from './Page/Post/CreatePost'
import ViewPost from './Page/Post/ViewPost'

const App = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='flex flex-col items-center justify-between min-h-[100vh] bg-white text-black'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add/post' element={<PostAdd />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coming" element={<ComingSoon />} />
        <Route path="/:id" element={<PostPage />} />
        <Route path="/post/:id" element={<PostPageDown />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/घटनाएं" element={<GhatnaPage />} />
        <Route path="/पत्रिका" element={<Patrika />} />
        {/* esko sahi karna hai authenication laga k sahi karna hai */}
        <Route path="/postAdd" element={<CreatePost/>} />
        <Route path="/viewPost" element={<ViewPost/>} />
      </Routes>
      <MdKeyboardDoubleArrowUp onClick={handleScrollToTop} className=' text-white flex items-center justify-center rounded-full p-[0.6rem] bg-black fixed right-4 z-[100000] text-[2.7rem] bottom-4 shadow-sm shadow-white cursor-pointer' />
      <Footer />
    </div>
  )
}

export default App
