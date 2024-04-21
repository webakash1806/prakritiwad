import React, { useEffect } from 'react'
import usePostDown from '../Hooks/usePostDown'
import usePostData from '../Hooks/usePostData'
import { Link, useNavigate } from 'react-router-dom'
import VideoPage from './Videos/VideoPage'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from '../redux/slice/PostSlice'

const GhatnaPage = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const postData=useSelector((state)=>(state.post.postData))

    console.log(postData);

    
    async function getPost(){
        const res= await dispatch(getAllPost())
    }

    useEffect(()=>{
        window.scrollTo(0,0) 
        getPost()
     },[])
     

    return (
        <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  mt-20 lg:w-[62rem] gap-8 sm:gap-4'>
            {/* {usePostDown.map((data, ind) => {
                return <>
                    <Link to={`/post/${ind}`} className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                        <img src={data.img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                        <h1 className=' text-[1.15rem] font-bold line-clamp-1'>{data.title}</h1>
                        <p className='text-[0.88rem] font-500 line-clamp-3'>{data.desc}</p>
                        <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                    </Link>
                </>
            })}
            {usePostData.map((data, ind) => {
                return <>
                    <Link to={`/${ind}`} className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                        <img src={data.img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                        <h1 className=' text-[1.15rem] font-bold line-clamp-1'>{data.title}</h1>
                        <p className='text-[0.88rem] font-500 line-clamp-3'>{data.desc}</p>
                        <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                    </Link>
                </>
            })} */}
             {postData.map((data, ind) => {
                    return <>
    
                        <div onClick={()=>navigate('/post/detail' ,{state: {...data}})}   className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                            <img src={data.thumbnail.secure_url} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                            <h1 className=' text-[1.15rem] font-bold line-clamp-1'>{data.title}</h1>
                            <p className='text-[0.88rem] font-500 line-clamp-3'>{data.description}</p>
                            <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white' onClick={()=>navigate("/post/detail")}>आगे पढ़े</button>
                        </div>
                    </>
                })}

            {/* <VideoPage /> */}
        </div>
    )
}

export default GhatnaPage
