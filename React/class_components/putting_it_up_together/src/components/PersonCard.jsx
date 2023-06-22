import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.person
        };
        
    }
    
    increment(){
        console.log(this.state);
        this.setState({
            person:{
            ...this.state.person,
            age : this.state.person.age + 1
    }} )
    console.log(this.state);
        }
        
    render() {
        console.log(this.state);
        const { firstName, lastName ,age,hairColor} = this.state.person;
    return (
        <div>
            <h1>{firstName} , {lastName}</h1>
            <p>age:{age}</p>
            <p>Hair Color:{hairColor}</p>
            <button onClick={()=>this.increment()}>Birthday button for {firstName}</button>
        </div>
    )
    }
}
