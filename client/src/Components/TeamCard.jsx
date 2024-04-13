import React from 'react'

const TeamCard = ({ img, name, desc }) => {
    return (
        <div className='flex flex-col pt-12 text-white items-center justify-center bg-black h-fit'>
            <img src={img} alt="" className='h-[20rem] w-[16rem] object-cover' />
            <p className='p-2 text-center font-semibold'>{name}</p>
            <p className='p-2 pt-0'>{desc}</p>
        </div>
    )
}

export default TeamCard