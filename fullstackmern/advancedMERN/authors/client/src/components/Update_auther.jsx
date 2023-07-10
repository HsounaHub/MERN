import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Form from './Form';
import { Link, useNavigate,useParams } from 'react-router-dom';

function Update_auther() {
    const [error,seterror]=useState('')
    const [auther,setauther]=useState('')
    const [loaded, setLoaded] = useState(false);
    const nav = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {setauther(res.data.Author.name)
                setLoaded(true);});
    }, [id])
    const updateAuther = (auther,setname) => {
        axios.put('http://localhost:8000/api/Authors/' + id, auther)
            .then(res=>{
                setname('')
                nav('/')
                seterror('')
            })
            .catch((err)=>{
            seterror(err.response.data.error.message.slice(25))
            console.log(err.response.data.error.message);
            })
            }
    return (
    <>
    <Link to={"/"}>Home </Link>
        <h2>update  author:</h2>
        {loaded && <Form onSubmitProp={updateAuther} initialname={auther} />}
    
    <p>{error}</p>
    </>
    )
}

export default Update_auther