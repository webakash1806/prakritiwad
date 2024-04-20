import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slice/AuthSlice'


const store=configureStore({
    reducer:{
        auth:authSliceReducer
    },
    devTools:true
})


export default store