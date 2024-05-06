import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import toast from 'react-hot-toast';
const Aakhbar = () => {
    // const courseDetails=useLocation().state
    const dispatch=useDispatch()
    const navigate=useNavigate()
 
    const [userInput,setUserInput]=useState({
     id:"",
     lecture:undefined,
     title:"",
     description:"",
     videoSrc:""
    })   
    
    const [previewImage,setPreviewImage]=useState("")

    console.log(userInput);
 
 
   function handleInputChange(e){
     const {name,value}=e.target
 
     setUserInput({
         ...userInput,
         [name]:value
     })
   } 

   function handleImageUpload(e){
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    // console.log(uploadedImage)
    if(uploadedImage) {
         setUserInput({
            ...userInput,
            eventImage: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
          setPreviewImage(this.result);
      })
    }
}
   
   function handleVideo(e){
     console.log(e);
     const video=e.target.files[0]
     const source=window.URL.createObjectURL(video)
     console.log(source);
     setUserInput({
         ...userInput,
         lecture:video,
         videoSrc:source
     })
   }
   
  async function onFormSubmit(e){
     toast.error("Updated Successfully")
  }
 
  useEffect(()=>{
  },[])
 
  return (
    <div>
          <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-[95vw] md:w-[60vw] rounded-lg  mt-[4rem] lg:mt-[7rem] ">
                    <header className="relative flex items-center justify-center">
                        <button 
                            className="absolute text-xl text-green-500 left-2"
                            onClick={() => navigate(-1)}
                        >
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className="text-xl font-semibold text-yellow-500">
                                 अख़बार
                        </h1>
                    </header>
                    <form 
                        onSubmit={onFormSubmit} className="flex flex-col gap-3"
                    >

                        <input 
                            type="text"
                            name="title"
                            placeholder="enter link Of अख़बार"
                            onChange={handleInputChange}
                            className="px-3 py-1 text-black bg-transparent border"
                            value={userInput.title}
                        />
                         <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {previewImage ? (
                                        <img 
                                            className="object-cover w-full m-auto border h-60"
                                            src={previewImage}
                                        />
                                    ): (
                                        <div className="flex items-center justify-center w-full m-auto border h-44">
                                            <h1 className="text-lg font-bold">Upload your अख़बार image  </h1>
                                        </div>
                                    )}

                                </label>
                                <input 
                                    className="hidden border border-black "
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>

                        {userInput.videoSrc ? (
                            <video 
                                muted
                                src={userInput.videoSrc}
                                controls 
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture
                                className="object-fill w-full rounded-tl-lg rounded-tr-lg"
                            >

                            </video>
                        ) : (
                            <div className="flex items-center justify-center h-48 border cursor-pointer">
                                <label className="font-semibold text-black cursor-pointer" htmlFor="lecture">Choose your video</label>
                                <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4 video/*" />
                            </div>
                        )}
                        <button type="submit" className="py-1 text-lg font-semibold btn btn-primary" >
                            Add new    अख़बार
                        </button>
                    </form>
                </div>   
    </div>
  )
}

export default Aakhbar
