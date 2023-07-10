import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete_button from './Delete_button';

function AutherList(props) {
    const [authers, setauthers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setauthers(res.data));
    }, [])
    
    const removeFromDom = authorId => {
        setauthers(authers.filter(author => author._id != authorId))
    }
    return (
    <div>
        <Link to={"/new"}>add an auther </Link>
        <h2>We have quotes by:</h2>


<table className='table'>
    <thead>
        <tr>
            <th>Auther</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
            {authers.map((auther) => {
                return (
                    <tr key={auther._id}>
                            <td>{auther.name}</td>
                            <td>
                            <Link to={`/edit/${auther._id}`} >
                            Edit
                        </Link> 
                        |
                        <Delete_button AuthorId={auther._id} successCallback={()=>removeFromDom(auther._id)}/>
                            </td>
                        </tr>
                    
                )
            })}
            </tbody>
        </table>
        </div>
    )
}

export default AutherList