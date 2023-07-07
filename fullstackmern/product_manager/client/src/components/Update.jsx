import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

const Update = (props) => {
const {id} = useParams();
const nav = useNavigate();
const [title, setTitle] = useState("")
const [Description, setDescription] = useState("")
const [Price, setPrice] = useState(0)

    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/Products/"+id)
        .then((res)=>{
            // console.log(res.data.Show);
            setTitle(res.data.Product.title)
            setPrice(res.data.Product.Price)
            setDescription(res.data.Product.Description)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

   const handleForm = (e) =>{
    e.preventDefault();
    
    // console.log(title, genre, episodes);
    const updatedShow = {
        title,
        Price,
        Description,
    }
    
    // send it to the server
    
    axios.put("http://localhost:8000/api/Products/"+id, updatedShow)
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
   }    

  return (
    <div>
        <h2>Edit Product</h2>
        {/* update form */}
        <form onSubmit={handleForm}>
                Title: <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
                Price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={Price}/> <br />
               Description: <input  onChange={(e)=>{setDescription(e.target.value)}}value={Description}/> <br />
                <button>Update</button>
            </form>
    </div>
  )
}

export default Update