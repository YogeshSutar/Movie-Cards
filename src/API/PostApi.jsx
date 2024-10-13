import axios from 'axios';

//if you want to access the url only 
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

//get data 
export const getPostData=()=>{
    return api.get("/posts");
}

export const getPostAddData=(postData)=>{
    console.log("thisi s",postData)
    return api.post("/posts",postData);
}

export const getPostDeleteData=(postDataId) =>{
    return api.delete(`/posts/${postDataId}`)
}
