import React from 'react'
import AddPost from './AddPost'

const PostAdd = () => {
    return (
        <div className='h-[90vh] w-full flex items-center justify-center'>
            <div className='md:p-4 p-1 mt-20 lg:w-[62rem] rounded-md shadow-[0px_0px_5px_#808080] flex flex-col gap-3'>
                <h1 className='text-[1.3rem] font-semibold'>Add Post...</h1>
                <input type="text" placeholder='Title...' className='border border-black w-full p-2 outline-none rounded' />
                <AddPost />
                <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white w-full'>Submit</button>
            </div>
        </div>
    )
}

export default PostAdd
