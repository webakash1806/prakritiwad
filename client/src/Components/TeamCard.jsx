import React from 'react'
import team from '../assets/img/team1.jpg'
const TeamCard = ({img,name}) => {
  return (
    <div className=''>
       <img src={img} alt="" />
       <p className='text-center font-semibold'>{name}</p>
    </div>
  )
}

export default TeamCard
