import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Main = (props) => {
    const [shows, setShows] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Products")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setShows(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[props.update])

    // delete function
    const deleteShow = (id) =>{
        axios.delete("http://localhost:8000/api/Products/"+id)
        .then((res)=>{
            // TODO !!
            setShows(shows.filter((oneShow)=>{
                return (oneShow._id !== id)
            }))
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err)
        })
    }
  return (
    <div>
        <h2>Product List</h2>

        {/* {JSON.stringify(shows)} */}

        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {shows.map((oneShow)=>{
                    return(
                        <tr key={oneShow._id}>
                            <td><Link to={`Products/${oneShow._id}`}>{oneShow.title}</Link></td>
                            <td>{oneShow.Price}</td>
                            <td>{oneShow.Description}</td>
                            <td>
                            <Link to={`Products/edit/${oneShow._id}`} > edit </Link>
                            <button onClick={() => deleteShow(oneShow._id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Main