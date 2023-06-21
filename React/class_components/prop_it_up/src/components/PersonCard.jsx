import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        const { firstName, lastName ,age,hairColor} = this.props.person;
        console.log(this.props);
    return (
        <div>
            <h1>{firstName} , {lastName}</h1>
            <p>age:{age}</p>
            <p>Hair Color:{hairColor}</p>
        </div>
    )
    }
}
