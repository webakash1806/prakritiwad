import React, { useEffect } from 'react'
import img from '../assets/Image/mainBg.jpg'
// import post1 from '../assets/Image/post1.jpg'
// import post2 from '../assets/Image/post2.jpg'
// import post3 from '../assets/Image/post3.jpg'
// import post4 from '../assets/Image/post4.jpg'
// import post5 from '../assets/Image/post5.jpg'
// import post6 from '../assets/Image/post6.jpg'
// import post7 from '../assets/Image/post7.jpg'
// import post8 from '../assets/Image/post8.jpg'
import AddPost from './AddPost'
import usePostData from '../Hooks/usePostData'
import usePostDown from '../Hooks/usePostDown'
import { Link, useNavigate } from 'react-router-dom'
import PostAdd from './PostAdd'
import VideoPage from './Videos/VideoPage'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from '../redux/slice/PostSlice'

const Home = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    // const [courseData]=useSelector((state)=>{
    //    return [state.course.courseData]
    // })

    const postData=useSelector((state)=>(state.post.postData))

    console.log(postData);
    // postData.map((val)=>{
    //   console.log(val.thumbnail.public_id)
    // })
    
    // console.log(courseData);
    async function getPost(){
        const res= await dispatch(getAllPost())
    }
    useEffect(()=>{
       window.scrollTo(0,0) 
       getPost()
    },[])
    

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    return (
        <div className='flex flex-col items-center justify-center overflow-x-hidden'>
            <div className=' mt-10 h-[24rem] sm:h-[29rem] md:h-[32rem] hero-img text-white flex flex-col items-center justify-center pt-10  gap-3'>
                <h1 className='font-[550] tracking-wider text-[2.8rem] font-lobster'>प्रकृतिवाद</h1>
                <p className='font-[500] tracking-wide md:text-[1.6rem] text-[1.4rem] text-center'>प्रकृति की बातें समाधान और राहें |
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 mt-8 lg:flex-row'>
                <div className='flex flex-col gap-2 sm:flex-row'>
                    <Link to={`/${1}`} className='m-1 relative rounded-md overflow-hidden w-[19rem] h-[26rem]'>
                        <img src={usePostData[1].img} alt="" className=' size-full' />
                        <div className='text-white absolute bottom-0 w-full text-center p-2 text-[1.2rem] font-bold tracking-wide bg-[#202020b5]'><p>{usePostData[1].title}</p></div>
                    </Link>
                    <Link to={`/${3}`} className='m-1 relative rounded-md overflow-hidden w-[19rem] h-[26rem]'>
                        <img src={usePostData[3].img} alt="" className=' size-full' />
                        <div className='text-white absolute bottom-0 w-full text-center p-2 text-[1.2rem] font-bold tracking-wide bg-[#202020b5]'><p>{usePostData[3].title}</p></div>
                    </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='px-1 font-bold tracking-wide text-[1.3rem]'>Latest blogs...</p>
                    <Link to={`/${2}`} className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={usePostData[2].img} className='sm:h-[7rem] h-[9rem] min-w-full sm:min-w-[15rem] lg:min-w-[10rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>{usePostData[2].title}</h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'>{usePostData[2].desc}</p>
                        </div>
                    </Link>
                    <Link to={`/${4}`} className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={usePostData[4].img} className='sm:h-[7rem] h-[9rem] min-w-full sm:min-w-[15rem] lg:min-w-[10rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>{usePostData[4].title}</h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'>{usePostData[4].desc}</p>
                        </div>
                    </Link>
                    <Link to={`/${5}`} className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={usePostData[5].img} className='sm:h-[7rem] h-[9rem] min-w-full sm:min-w-[15rem] lg:min-w-[10rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>{usePostData[5].title}</h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'>{usePostData[5].desc}</p>
                        </div>
                    </Link>
                </div>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-10 lg:w-[62rem] gap-8 sm:gap-4 '>
                {postData.map((data, ind) => {
                   {"ayush"} 
                    return <>
                        <Link to={`/post/${ind}`} className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                            <img src={data.thumbnail.secure_url} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                            <h1 className=' text-[1.15rem] font-bold line-clamp-1'>{data.title}</h1>
                            <p className='text-[0.88rem] font-500 line-clamp-3'>{data.description}</p>
                            <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                        </Link>
                    </>
                })}

            </div>
            <VideoPage />
            <button className='border border-red-500 text-black p-[0.2rem] px-[2rem] ' onClick={()=>getPost()}>ADD</button>
        </div>
    )
}

export default Home