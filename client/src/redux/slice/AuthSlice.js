import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import toast from  'react-hot-toast'
import axiosInstance from "../../helper/axiosInstance"
import {json} from 'react-router-dom'


const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || "ACTIVE"
}

export const LoginAccount=createAsyncThunk("/auth/login",async(data)=>{
  try{
   const response=axiosInstance.post("user/login",data)
   console.log("i am login data");
   toast.promise(response,{
    loading:'Waiting authenciation is in Process',
    success:(data)=>{
        return data?.data?.message 
    },
    error:"Failed to Login"
   })
   return (await response).data
  }catch(error){
    toast.error(error?.response?.data?.message)
  }
})

// export const logout=createAsyncThunk("/auth/logout",async()=>{
//   try{
//      const response=axiosInstance.get("user/logout")
//      toast.promise(response,{
//       loading:"Wait! logout in progress....",
//       success:(data)=>{
//           return data?.data?.message
//       },
//       error:"Filed to logout"
//      })
//   }catch(error){
//       toast.error(error?.response?.data?.message)
//   }
// })



const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(LoginAccount.fulfilled,(state,action)=>{
         localStorage.setItem("data",JSON.stringify(action?.payload?.user))
         localStorage.setItem("isLoggedIn",true)
         localStorage.setItem("role",action?.payload?.user?.role)
         state.isLoggedIn=true,
         console.log(action?.payload?.user)
         state.data=action?.payload?.user
         state.role=action?.payload?.user?.role
        })

        // .addCase(logout.fulfilled,(state)=>{
        //   localStorage.clear()
        //   state.data={}
        //   state.isLoggedIn=false
        //   state.role=""
        //  })
    }
})




export const {}=authSlice.actions

export default authSlice.reducer