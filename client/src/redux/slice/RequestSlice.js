import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helper/axiosInstance'


const initialState={
    RequestPostData:[]
}

export const getQueryPost=createAsyncThunk("/getQueryPost",async()=>{
    try{
        const response=axiosInstance.get("user/getQueryPost")
      toast.promise(response,{
        loading:"loading QueryPost data...",
        success:"Query Post loaded succesfully",
        error:"failed to get the Query Post"
      })
      return (await response).data.postQuery
    }catch(e){
        toast.error(error?.response?.data?.message)
    }
})


export const addQueryPost=createAsyncThunk("/addQueryPost",async(data)=>{
    try{

       const formData=new FormData()
       formData.append("fullName",data?.fullName)
       formData.append("description",data?.description)
       formData.append("email",data?.email)
       formData.append("phoneNumber",data?.phoneNumber)
       formData.append("title",data?.title)
       formData.append("aadharCard",data?.aadharCard)
        const response=axiosInstance.post("user/addQueryPost",formData)
        toast.promise(response,{
          loading:"creating Post Request",
          success:"Post Request created Successfull",
          error:"failed to create Post Request"
        })
        
        console.log((await response).data);
        return (await response).data
       }catch(error){
        toast.error(error?.response?.data?.message)
       }
})


export const deleteQueryPost=createAsyncThunk("/deleteQueryPost",async(pid)=>{
    try{
      console.log("hy i am delete query post");
      const response=axiosInstance.delete(`user/deleteQueryPost/${pid}`)
      toast.promise(response,{
        loading:"deleting Post Request",
        success:"Post Requesr delete sucessfully",
        error:"Failed to delete the Post Request"
       })
       return (await response).data
      // console.log("hyyy ");
    }catch(error){
        toast.error(error.response.data.message)
    }
  })




  const PostRequesrSlice=createSlice({
    name:"PostRequest",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getQueryPost.fulfilled,(state,action)=>{
             console.log(action);
             if(action.payload){
                state.RequestPostData=[...action.payload] 
             }     
        })
    }
})


export default PostRequesrSlice.reducer


