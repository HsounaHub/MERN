import React from 'react'
import {useParams} from 'react-router-dom'
function Show_word() {
    const {word,color1,color2} = useParams();
  return (
    <>
    {isNaN(word)? <div style={{backgroundColor:color2,color:color1}}>the Word is:{word}</div>:<p>not valid world</p>}
    </>

  )
}

export default Show_word