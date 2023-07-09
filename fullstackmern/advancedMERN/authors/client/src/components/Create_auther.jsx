import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';
import { Link, useNavigate } from 'react-router-dom';

function Create_auther() {
  const [error,seterror]=useState('')
    const nav = useNavigate();
    const createAuther = (auther,setname) => {
        axios.post('http://localhost:8000/api/Authors', auther)
            .then(res=>{
                setname('')
                nav('/')
                seterror('')
            })
            .catch((err)=>{
              seterror(err.response.data.error.message.slice(32))
          })
          }
  return (
    <>
    <Link to={"/"}>Home </Link>
         <h2>Add a new  author:</h2>
    <Form onSubmitProp={createAuther} initialname="" />
    <p>{error}</p>
    </>
  )
}

export default Create_auther