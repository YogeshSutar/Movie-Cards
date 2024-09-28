
export const moviesApi = async() =>{
    try{
    const response =  await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=88f58236&s=titanic&page=1")
    const data = await response.json();
    console.log("this is inner function og api")
    console.log(data)
    return data
    }
    catch(error){
        console.log("this is catch error : ",error)
    }
    
}