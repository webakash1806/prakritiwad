import React from 'react'
import AddPost from './AddPost'

const PostAdd = () => {
    return (
        <div className='flex items-center justify-center w-full '>
            <div className='md:p-4 p-1 mt-20 lg:w-[62rem] rounded-md shadow-[0px_0px_5px_#808080] flex flex-col gap-3'>
                <h1 className='text-[1.3rem] font-semibold'>Add Post...</h1>
                <input type="text" placeholder='Title...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                <input type="text" placeholder='Your name...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                <div className='flex flex-col gap-3 md:flex-row'>
                    <input type="email" placeholder='Your email...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                    <input type="number" placeholder='Your Number...' className='w-full p-2 bg-white border border-black rounded outline-none' />

                </div>
                <div>
                    <input type="number" placeholder='Your Aadhar number...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                    <p className='text-[0.8rem] font-semibold'><span className='text-[1rem] text-red-600'>***</span>Aadhar number is taken only for your&apos;s verification</p>
                </div>
                <AddPost />
                <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white w-full'>Submit</button>
            </div>
        </div>
    )
}

export default PostAdd
