import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/slice/PostSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CreatePost = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [previewImage,setPreviewImage]=useState("")
    const [userInput,setUserInput]=useState({
        title:"",
        description:"",
        thumbnail:null
     })

     function handleImageUpload(e){
        e.preventDefault();
        console.log("i am handle image uplaods");
        const uploadedImage = e.target.files[0];
        console.log(uploadedImage)
        if(uploadedImage) {
             setUserInput({
                ...userInput,
                thumbnail: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            // fileReader.addEventListener("load", function () {
            //     thumbnail:uploadedImage
            //     previewImage:this.result
            //     console.log(userInput.previewImage)
            // })
            fileReader.addEventListener("load", function () {
              setPreviewImage(this.result);
          })
        }
  }
   
  function handleUserInput(e){
    const {name,value}=e.target
    setUserInput({
      ...userInput,
      [name]:value
    })
    console.log(userInput);
  }
   
  async function addingPost(){
    console.log(userInput);
    if(!userInput.title  || !userInput.description || !userInput.thumbnail){
      toast.error("All field are required")
      return 
    }

    const response=await dispatch(addPost(userInput))
  console.log(response);
  if(response?.payload?.sucesss){
    setUserInput({
      title:"",
      description:"",
      thumbnail:null,
      previewImage:"" 
    })
    navigate("/")
  }
}

    return (
        <div className='flex items-center justify-center w-full '>
            <div className='md:p-4 p-1 mt-20 lg:w-[62rem] rounded-md shadow-[0px_0px_5px_#808080] flex flex-col gap-3'>
                <h1 className='text-[1.3rem] font-semibold'>Add Post...</h1>
                <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {previewImage ? (
                                        <img 
                                            className="w-full m-auto border h-[25rem]"
                                            src={previewImage}
                                        />
                                    ): (
                                        <div className="flex items-center justify-center w-full m-auto border h-44">
                                            <h1 className="text-lg font-bold">Upload your Post thumbnail</h1>
                                        </div>
                                    )}

                                </label>
                                <input 
                                    className="hidden "
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                </div>

                <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Post title"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                </div>
                  
                <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Description
                                </label>
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
                            </div>


                {/* <input type="text" placeholder='Title...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                <input type="text" placeholder='Your name...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                <div className='flex flex-col gap-3 md:flex-row'>
                    <input type="email" placeholder='Your email...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                    <input type="number" placeholder='Your Number...' className='w-full p-2 bg-white border border-black rounded outline-none' />

                </div>
                <div>
                    <input type="number" placeholder='Your Aadhar number...' className='w-full p-2 bg-white border border-black rounded outline-none' />
                    <p className='text-[0.8rem] font-semibold'><span className='text-[1rem] text-red-600'>***</span>Aadhar number is taken only for your&apos;s verification</p>
                </div> */}
                {/* <AddPost /> */}
                <button className='bg-[#A22EFF] rounded-[3px] mt-2 p-1 py-2 text-[0.9rem] font-bold text-white w-full' onClick={()=>addingPost()}>Submit</button>
            </div>
        </div>
    )
}

export default CreatePost