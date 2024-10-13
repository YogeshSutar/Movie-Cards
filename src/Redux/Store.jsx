import {configureStore} from "@reduxjs/toolkit"
import postSliceData from './PostSlice'

const store = configureStore({
    reducer:{
        postData : postSliceData
    }
})

export default store;