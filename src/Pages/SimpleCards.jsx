import { useEffect} from "react"
import { getPostData, getPostDeleteData } from "../API/PostApi"
import UpdateContent from "../Component/UpdateContent"
import "../CSS/simpleCards.css"
import {setData,deleteData} from "../Redux/PostSlice"
import { useDispatch, useSelector } from "react-redux"
const SimpleCards = () => {
    const dispatch = useDispatch()
    const getDataSelector = useSelector((state) => state.postData.post)
    // const getDeleteDataSelector = useSelector((state)=>{state.postData.})
    // const [getData, setGetData] = useState([])
    const detDataFromApi = async () => {
        try {
            const res = await getPostData()
            dispatch(setData(res.data))
            // console.log("API Feching Data : ", res.data)
            // console.log("this is data from GET Data API Calling ", res.data)
            // setGetData(res.data)
        }
        catch (error) {
            console.log("Feching API Error : ", error)
        }
    }

    const handleDelete = async(id)=>{
        try{
            await getPostDeleteData(id);

            dispatch(deleteData(id));
            if(dispatch(deleteData(id))){
                console.log("data deleted successfully")
                alert("Data Deleted Succssfully")
            }
            else{
                console.log("please check there is error on DELETE Functionality")
            }
        }
        catch(error){
            console.log("Deleted function API CATCH :" ,error);
            
        }
    }
    // console.log("Data from Redux: ", getDataSelector);

    useEffect(() => {
        detDataFromApi()
    },[])


    // console.log("this is getDataSelector ",getDataSelector)
    return (
        <>
            <div className="main-container">
                <h2 style={{ textAlign: 'center', padding: "90px 0px 0px 0px" }}>ADD , UPDATE , DELETE AND CREATE SIMPLE CARDS</h2>

                <UpdateContent />


                <div className="second-container" style={{ display: "flex", border: "1px solid Orange", flexWrap: "wrap", padding: "20px 20px" }}>

                    {getDataSelector && getDataSelector.length > 0 ?
                        getDataSelector.map((currentData,index) => (
                            <div key={currentData.id} style={{ width: "30%", padding: "20px 20px" }}>
                                <div className="inner-box-content" style={{ border: "1px solid black", height: "100%", width: "100%", padding: '10px 10px' }}>
                                    <span style={{ fontWeight: "500" }}>{index + 1}</span>
                                    <h3>{currentData.title}</h3>
                                    <p>{currentData.body}</p>
                                    <input type="submit" name="delete" value="Delete" onClick={()=>handleDelete(currentData.id)}/>
                                </div>
                            </div>
                        )
                    )
                    :(
                        <p style={{fontSize:"20px", alignItems:"center"}}>No posts available</p>
                    )
                }

                </div>
            </div>
        </>
    )
}

export default SimpleCards