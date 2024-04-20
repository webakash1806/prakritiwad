import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slice/AuthSlice'
import postSliceReducern from './slice/PostSlice'

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        post:postSliceReducern
    },
    devTools:true
})


export default store