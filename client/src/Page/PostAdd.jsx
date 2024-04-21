import React, { useState } from 'react'
import AddPost from './AddPost'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addQueryPost } from '../redux/slice/RequestSlice'
import toast from 'react-hot-toast'
const PostAdd = () => {
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [userInput,setUserInput]=useState({
        title:"",
        description:"",
        fullName:"",
        email:"",
        phoneNumber:"",
        aadharCard:""
     })

     const postData=useSelector((state)=>(state.RequestPost.RequestPostData))

     console.log(postData);

     function handleUserInput(e){
        const {name,value}=e.target
        setUserInput({
          ...userInput,
          [name]:value
        })
      }
      
      console.log(userInput);
      async function addingPost(){
        if(!userInput?.title  || !userInput?.description || !userInput?.fullName || !userInput?.email|| !userInput?.phoneNumber || !userInput?.aadharCard){
          toast.error("All field are required")
          return 
        }
    
        const response=await dispatch(addQueryPost(userInput))
      if(response?.payload?.sucesss){
        setUserInput({
          title:"",
          description:"",
          fullName:"",
          email:"",
          phoneNumber:"",
          aadharCard:""
        })
        navigate("/")
      }
    }
    

    return (
        <div className='flex items-center justify-center w-full '>
            <div className='md:p-4 p-1 mt-20 lg:w-[62rem] rounded-md shadow-[0px_0px_5px_#808080] flex flex-col gap-3'>
                <h1 className='text-[1.3rem] font-semibold'>Add Post...</h1>
                <input
                    required
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Post title"
                    className="w-full p-2 bg-white border border-black rounded outline-none'"
                    value={userInput.title}
                    onChange={handleUserInput}
                />
               <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter Your Name"
                    className="w-full p-2 bg-white border border-black rounded outline-none'"
                    value={userInput.fullName}
                    onChange={handleUserInput}
                />
                <div className='flex flex-col gap-3 md:flex-row'>
                     <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-2 bg-white border border-black rounded outline-none'"
                    value={userInput.email}
                    onChange={handleUserInput}
                   />
                     <input
                    required
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your Contact Number"
                    className="w-full p-2 bg-white border border-black rounded outline-none'"
                    value={userInput.phoneNumber}
                    onChange={handleUserInput}
                   />

                </div>
                <div>
                <input
                    required
                    type="text"
                    name="aadharCard"
                    id="aadharCard"
                    placeholder="Enter your aadharCard"
                    className="w-full p-2 bg-white border border-black rounded outline-none'"
                    value={userInput.aadharCard}
                    onChange={handleUserInput}
                   />
                    <p className='text-[0.8rem] font-semibold'><span className='text-[1rem] text-red-600'>***</span>Aadhar number is taken only for your&apos;s verification</p>
                </div>
                {/* <AddPost /> */}
                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter post Description"
                                    className="px-2  bg-transparent border pb-[10rem] line-clamp-1"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />

                <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white w-full' onClick={()=>addingPost()}>Submit</button>
            </div>
        </div>
    )
}

export default PostAdd
