import React from 'react'

function PersonCard(props) {
    const { firstName, lastName ,age,hairColor} = props.person;
    console.log(props);
return (
    <div>
        <h1>{firstName} , {lastName}</h1>
        <p>age:{age}</p>
        <p>Hair Color:{hairColor}</p>
    </div>
)
}

export default PersonCard