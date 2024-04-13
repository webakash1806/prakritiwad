import React from 'react'
import Team from './Team'

const About = () => {
  return (
    <div className='flex flex-col gap-3 p-2 border border-black items-center justify-center'>
      <p className='lg:text-center w-[30rem] sm:w-[40rem] md:w-[45rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse veritatis inventore molestias delectus. Exercitationem aliquam asperiores provident ipsam soluta.</p>
      <Team/>
    </div>
  )
}

export default About
