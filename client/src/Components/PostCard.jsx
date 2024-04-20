import React from 'react'

const PostCard = ({obj}) => {
    console.log(obj);
    console.log("ayush");
  return (
   < div onClick={()=>navigate('/post/detail' ,{state: {...obj}})} className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2 cursor-pointer'>
        <img src={obj.thumbnail.secure_url} className='w-[18rem] h-[12rem] rounded-md' alt="" />
        <h1 className=' text-[1.15rem] font-bold line-clamp-1'>{obj.title}</h1>
        <p className='text-[0.88rem] font-500 line-clamp-3'>{obj.description}</p>
        <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white' onClick={()=>navigate("/post/detail")}>आगे पढ़े</button> 
  </div>
  )
}

export default PostCard
