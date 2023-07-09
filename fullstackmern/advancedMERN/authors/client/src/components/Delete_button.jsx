import React from 'react'
import axios from 'axios';

function Delete_button(props) {
    const { AuthorId, successCallback } = props;
    
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/Authors/' + AuthorId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}
export default Delete_button