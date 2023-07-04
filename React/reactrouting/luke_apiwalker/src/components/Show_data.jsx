import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'
function Show_data(props) {
    const [data, setData] = useState(null);
    // console.log(useParams());
    const {type,id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}`)
        .then((apiResponse)=>{
            console.log(apiResponse.data);
            setData(apiResponse.data)
        })
        .catch((err)=>{
            navigate("/ErrorNotFound", {replace:true})
        })

    },[id, navigate,type])
  return (
    <>
        {data ? <>
        <h1>{data.name}</h1>
        {type === "planets" ? <><p>Climate: {data.climate}</p><p>Terrain: {data.terrain}</p><p>Surface Water: {data.surface_water}</p><p>Population: {data.population}</p></> : ""}
        {type === "people" ? <><p>Height: {data.height}</p><p>Mass: {data.mass}</p><p>Hair Color: {data.hair_color}</p><p>Skin Color: {data.skin_color}</p></> : ""}
        </>: <p>Loading ...</p> }
        
    </>
  )
}

export default Show_data