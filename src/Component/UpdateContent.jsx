import { Form } from "react-router-dom"
import "../CSS/simpleCards.css"
import { useState } from "react"
import { getPostAddData } from "../API/PostApi"
import { useDispatch} from "react-redux"
import { addData } from "../Redux/PostSlice"

const UpdateContent = () => {

    const inputContent = {
        width: "20%",
        padding: "8px 8px",
        fontWeight: "bolder",
        margin: "0px 15px",
        fontSize: "15px",
        borderRadius:"10px",
        border:"none"
    }
    const updateBtn = {
        padding: "6px 10px",
        fontWeight: "bolder",
        fontSize: "15px",
        borderRadius: "5px",
        border: "1px solid white",        
    }

    const [apiData, setApiData] = useState(
        {
            id:"",
            title: "",
            body: ""
        }
    )
    const dispatch = useDispatch()

    // const postDataSelection = useSelector(postData((state)=>state.addData.post))
    const postData = async () => {
        try {
            // const payload =  {
            //     "userId": 1002,
            //     "id": 1999,
            //     "title": "mahesh",
            //     "body": "king"
            //   }
            if (!apiData.title || !apiData.body) {
                console.log("the adding data fields are empty")
            }
            const apiPostData = await getPostAddData(apiData);
            // console.log("This is Post Data API Adding Data",apiPostData)
            // if (apiPostData && apiPostData.data) {
            dispatch(addData(apiData))
            setApiData({
                id:"",
                title: "",
                body: ""
            });
        }
        
        catch (error) {
        // console.log("This is Post Api Error ",error);

    }
}
// useEffect(()=>{
//     postData();
// },[])


const handleInputContent = (e) => {
    const { name, value } = e.target;
    console.log("This is name ", name)
    setApiData((apiPostData) => ({
        ...apiPostData,
        [name]: value
    }
    )
    )
    // console.log(name)
    // console.log("Adding Data in to API",name);
}

const handelFrom = (e) => {
    e.preventDefault()
    postData();
    // dispatch(addData(apiData))

    console.log("Submitted Data: ", apiData);
}
return (
    <>
        <Form onSubmit={handelFrom}>
            <div style={{ textAlign: 'center', padding: "20px 20px", gap: "20px" }}>
                <input style={inputContent} onChange={handleInputContent} type="text" name="title" placeholder="Title Section" value={apiData.title} required/>
                <input style={inputContent} onChange={handleInputContent} type="text" name="body" placeholder="Body Section" value={apiData.body} required/>
                <input type="submit" style={updateBtn} name="submit" value="ADD CARD" />
            </div>
        </Form>
    </>
)
}

export default UpdateContent

