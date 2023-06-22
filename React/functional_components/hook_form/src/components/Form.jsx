import React, { useState } from  'react';
function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [ConfirmPassword, setConfirmPassword] = useState(""); 
  return (
    <div>
    <form >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h5>FirstName:{FirstName}</h5>
        <h5>LastName:{LastName}</h5>
        <h5>email:{email}</h5>
        <h5>password:{password}</h5>
        <h5>ConfirmPassword:{ConfirmPassword}</h5>
        </div>
  )
}

export default Form