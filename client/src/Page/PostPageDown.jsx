import React, { useEffect } from 'react'
import usePostDown from '../Hooks/usePostDown'
import { useParams } from 'react-router-dom'
const PostPageDown = () => {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='mt-20 sm:px-10 md:px-20 lg:px-32'>
            <h1 className='text-[1.9rem] md:text-[2.5rem] m-2 font-bold'>{usePostDown[id].title}</h1>
            <img src={usePostDown[id].img} className='sm:float-right max-w-[22rem] sm:w-[18rem] md:w-[21rem] lg:w-[22rem] m-2 rounded-md h-fit' alt="" />
            <p className='m-2'>{usePostDown[id].desc}</p>
            <p className='w-full p-2 pr-6 font-semibold text-right text-red-600 '>{usePostDown[id].author}</p>
        </div>
    )
}

export default PostPageDown
