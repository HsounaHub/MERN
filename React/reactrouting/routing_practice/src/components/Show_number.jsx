import React from 'react'
import {useParams} from 'react-router-dom'

function Show_number() {
    const {id} = useParams();
  return (
    <div>
        <>{isNaN(id)? <p>the Word is:{id} </p>:<p>the number is:{id}</p>}</>
    </div>
  )
}

export default Show_number