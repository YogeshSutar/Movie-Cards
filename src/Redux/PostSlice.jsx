import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post:[],
}

const postSlice = createSlice({
    name:"apiDataFetch",
    initialState,
    reducers:{
        setData :(state, action)=>{
            state.post = action.payload
        },
        addData: (state,action)=>{
            state.post.push(action.payload)
        },
        deleteData : (state,action)=>{
            state.post = state.post.filter((prevData)=> prevData.id !== action.payload)
        }
    }
})

export const {addData,setData,deleteData} = postSlice.actions;

export default postSlice.reducer