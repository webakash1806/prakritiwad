import React from 'react'
import img from '../assets/Image/mainBg.jpg'
import AddProfile from './AddPost'
import AddPost from './AddPost'


const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-[100%] mt-10 h-[24rem] sm:h-[29rem] md:h-[32rem] hero-img text-white flex flex-col items-center justify-center pt-10 sm:px-20 px-2 gap-3'>
                <h1 className='font-[550] tracking-wider text-[2.8rem] font-lobster'>प्रकृतिवाद</h1>
                <p className='font-[500] tracking-wide md:text-[1.6rem] text-[1.4rem] text-center'>प्रकृति की बातें समाधान और राहें |
                </p>
            </div>
            <div className='flex flex-col lg:flex-row mt-8 items-center justify-center gap-2'>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <div className='m-1 relative rounded-md overflow-hidden w-[19rem] h-[26rem]'>
                        <img src={img} alt="" className=' object-cover size-full' />
                        <div className='text-white absolute bottom-0 w-full text-center p-2 text-[1.2rem] font-bold tracking-wide bg-[#202020b5]'><p>प्रकृतिवाद
                            प्रकृति की बातें समाधान और राहें |</p></div>
                    </div>
                    <div className='m-1 relative rounded-md overflow-hidden w-[19rem] h-[26rem]'>
                        <img src={img} alt="" className=' object-cover size-full' />
                        <div className='text-white absolute bottom-0 w-full text-center p-2 text-[1.2rem] font-bold tracking-wide bg-[#202020b5]'><p>प्रकृतिवाद
                            प्रकृति की बातें समाधान और राहें |</p></div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='px-1 font-bold tracking-wide text-[1.3rem]'>Latest blogs...</p>
                    <div className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={img} className='sm:h-[7rem] h-[9rem] w-full sm:w-[25rem] lg:w-[18rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>प्रकृति की बातें समाधान कृति की बातें समाधान  और राहें  प्रकृति की बातें समाधान और राहें </h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'> प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें </p>
                        </div>
                    </div>
                    <div className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={img} className='sm:h-[7rem] h-[9rem] w-full sm:w-[25rem] lg:w-[18rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>प्रकृति की बातें समाधान कृति की बातें समाधान  और राहें  प्रकृति की बातें समाधान और राहें </h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'> प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें </p>
                        </div>
                    </div>
                    <div className='flex m-1 flex-col sm:flex-row items-start gap-2 w-[19rem] sm:w-[38rem] lg:w-[23rem]'>
                        <img src={img} className='sm:h-[7rem] h-[9rem] w-full sm:w-[25rem] lg:w-[18rem] object-cover' alt="" />
                        <div>
                            <h1 className='text-[1.1rem] font-extrabold line-clamp-1 sm:line-clamp-2'>प्रकृति की बातें समाधान कृति की बातें समाधान  और राहें  प्रकृति की बातें समाधान और राहें </h1>
                            <p className='text-[0.9rem] line-clamp-2 mt-1'> प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें  प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-10 lg:w-[62rem] gap-8 sm:gap-4'>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
                <div className='rounded-md flex flex-col gap-1 w-[19rem] shadow-[0px_0px_5px_#808080] p-2'>
                    <img src={img} className='w-[18rem] h-[12rem] rounded-md' alt="" />
                    <h1 className=' text-[1.15rem] font-bold line-clamp-1'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</h1>
                    <p className='text-[0.88rem] font-500 line-clamp-3'>प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें प्रकृति की बातें समाधान और राहें</p>
                    <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white'>आगे पढ़े</button>
                </div>
            </div>
            <div className='md:p-4 p-1 rounded-md shadow-[0px_0px_5px_#808080] mt-10 flex flex-col gap-3'>
                <h1 className='text-[1.3rem] font-semibold'>Add Post...</h1>
                <input type="text" placeholder='Title...' className='border border-black w-full p-2 outline-none rounded' />
                <AddPost />
                <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white w-full'>Submit</button>
            </div>
        </div>
    )
}

export default Home