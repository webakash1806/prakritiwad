import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slice/AuthSlice'
import postSliceReducer from './slice/PostSlice'
import PostRequestReducer from './slice/RequestSlice'

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        post:postSliceReducer,
        RequestPost:PostRequestReducer
    },
    devTools:true
})


export default store