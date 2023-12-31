import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
const ShowOne = (props) => {


    const [oneShow, setOneShow] = useState({})
    // get the id from :id in the route
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Products/"+id)
        .then((serverResponse)=>{
            // console.log(serverResponse.data);
            setOneShow(serverResponse.data.Product)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])
  return (
    <div>
       <h1>About {oneShow.title}</h1> 
       {/* {JSON.stringify(oneShow)} */}
        <ul>
            <li>{oneShow.title}</li>
            <li>{oneShow.Price}</li>
            <li>{oneShow.Description}</li>
        </ul>
    </div>
  )
}

export default ShowOne