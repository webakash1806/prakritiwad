import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../helper/axiosInstance';
import toast from 'react-hot-toast';


const initialState={
    postData:[]
}

export const getAllPost=createAsyncThunk("/getPost",async()=>{

    try{
      const response=axiosInstance.get("user/getpost")

      toast.promise(response,{
        loading:"loading post data...",
        success:"post loaded succesfully",
        error:"failed to get the post"
      })
      return (await response).data.allPost
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})


export const deletePost=createAsyncThunk("/post/delete",async(pid)=>{
  try{
    const response=axiosInstance.delete(`user/deletepost/${pid}`)
    console.log(response);
    toast.promise(response,{
      loading:"deleting post",
      success:"Post delete sucessfully",
      error:"Failed to delete the Post"
     })
     return (await response).data
    // console.log("hyyy ");
  }catch(error){
      toast.error(error.response.data.message)
  }
})

 
export const addPost=createAsyncThunk("/addPost",async(data)=>{
   try{
    let formData=new FormData()
    formData.append("title",data?.title)
    formData.append("description",data?.description)
    formData.append("thumbnail",data?.thumbnail)
    
    const response=axiosInstance.post("user/addPost",formData)


    toast.promise(response,{
      loading:"creating new Post",
      success:"Post created Successfull",
      error:"failed to create Post"
    })

    return (await response).data
   }catch(error){
    toast.error(error?.response?.data?.message)
   }
})


const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPost.fulfilled,(state,action)=>{
             if(action.payload){
                state.postData=[...action.payload] 
             }     
        })
    }
})


export default postSlice.reducer