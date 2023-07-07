import React from 'react'
import {useState } from "react"
import axios from "axios"


function Form() {
    const [title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const handleForm = (e) =>{
        e.preventDefault();
        
        // console.log(title, genre, episodes);
        const updatedShow = {
            title,
            Price,
            Description,
        }
        console.log(updatedShow);
        // send it to the server
        
        axios.post("http://localhost:8000/api/Products/", updatedShow)
        .then((response)=>{
            setTitle('');setPrice(0);setDescription('');
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
       }
       return (
        <div>
            <h2>Product Manager</h2>
            {/* update form */}
            <form onSubmit={handleForm}>
                Title: <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
                Price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={Price}/> <br />
               Description: <input  onChange={(e)=>{setDescription(e.target.value)}}value={Description}/> <br />
                <button>Create</button>
            </form>
        </div>
      )
}

export default Form