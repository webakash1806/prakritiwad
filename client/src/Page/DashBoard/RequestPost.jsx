import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { deleteQueryPost, getQueryPost } from '../../redux/slice/RequestSlice';
// import { deletePostQuery } from '../../../../server/controllers/query.controller';
const RequestPost = () => {
   
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const postData=useSelector((state)=>(state.RequestPost.RequestPostData))

    async function getPost(){
        const res= await dispatch(getQueryPost())
    } 

    async function onPostDelete(id){
        if(window.confirm("Are you sure you want to delete")){
            console.log("ayush");
            const res=await dispatch(deleteQueryPost(id))
            console.log(res);
            if(res?.payload?.success){
                navigate("/")
            }
        }
     }

    
    useEffect(()=>{
      getPost()
    },[])

  return (
    <div className='flex items-center justify-center w-full '>
        <div className='md:p-4 p-1 mt-20 lg:w-[62rem] rounded-md shadow-[0px_0px_5px_#808080] flex flex-col gap-3 overflow-x-auto'>
            {/* {postData.map((val)=><ViewPostCard title={val.title} image={val.thumbnail.secure_url} description={val.description}/>)} */}
            <table className='table min-w-full overflow-x-scroll table-auto'>
               <thead className=''>
                  <tr>
                    <th className='px-4 py-4'>S No</th>
                    <th className='px-4 py-4'>title</th>
                    <th className='px-4 py-4'>Description</th>
                    <th className='px-4 py-4'>Name</th>
                    <th className='px-4 py-4'>email</th>
                    <th className='px-4 py-4'>aadharCard</th>
                    <th className='px-4 py-4'>Action</th>
                  </tr>
               </thead>
               <tbody className=''>
                {postData.map((post,ind)=>{
                   return(
                    <tr key={post._id} className=''>
                       <td className='px-4 py-4'>{ind+1}</td>
                       <td className='px-4 py-4'>
                        <textarea  readOnly value={post?.title}    className='w-40 h-auto resize-none'></textarea>
                       </td>
                       <td className='px-4 py-4'>
                       <textarea readOnly value={post?.description} className='w-40 h-[9rem] resize-none '></textarea>
                       </td>
                       <td className='px-4 py-4'>
                       <textarea readOnly value={post?.fullName} className='w-40 h-[9rem] resize-none '></textarea>
                       </td>
                       <td className='px-4 py-4'>
                       <textarea readOnly value={post?.email} className='w-40 h-[9rem] resize-none '></textarea>
                       </td>
                       <td className='px-4 py-4'>
                       <textarea readOnly value={post?.aadharCard?.secure_url} className='w-40 h-[9rem] resize-none '></textarea>
                       </td>
                    
                       <td className='flex flex-col items-center px-4 py-4 lg:flex-row' >
                            <button className='p-[0.2rem] px-[2rem] font-bold text-black rounded-md'  >
                               <BsCollectionPlayFill className='text-[1rem] font-bold text-green-600'/>
                            </button>
                            <button  className='p-[0.2rem] px-[2rem] font-bold text-black rounded-md'>
                               <BsTrash onClick={()=>onPostDelete(post?._id)}    className='text-[1rem] font-bold text-red-500'/>
                            </button>
                           {/* {readOnly? <button className='text-black' onClick={()=>handleSaveClick()}>Edit</button>:<button className='text-black ' onClick={()=>handleSaveClick()}>Save</button>} */}
                       </td>
                    </tr>
                   )
                })}

               </tbody>
            </table>
        </div>
    
     </div>   
  )
}

export default RequestPost