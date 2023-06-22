import React, { useState } from  'react';
function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [ConfirmPassword, setConfirmPassword] = useState(""); 
    const [errorr,seterrorr]= useState({FirstName:false,LastName:false,email:false,password:false,ConfirmPassword:false});
    const validateFirstName = (e) =>{
        setFirstName(e.target.value)

        if(e.target.value.length < 3){
            seterrorr({FirstName:true});
        }else{
            seterrorr({FirstName:false});
        }}
    const validatesetLastName = (e) =>{
            setLastName(e.target.value)
    
            if(e.target.value.length < 3){
                seterrorr({LastName:true});
            }else{
                seterrorr({LastName:false});
            }}
            const validateemail = (e) =>{
                setEmail(e.target.value)
        
                if(e.target.value.length < 6){
                    seterrorr({email:true});
                }else{
                    seterrorr({email:false});
                }}
                const validatepassword = (e) =>{
                    setPassword(e.target.value)
            
                    if(e.target.value!= ConfirmPassword){
                        seterrorr({password:true});
                    }else{
                        seterrorr({password:false});
                    }}
                    const validateConfirmPassword = (e) =>{
                        setConfirmPassword(e.target.value)
                
                        if(e.target.value!= password){
                            seterrorr({ConfirmPassword:true});
                        }else{
                            seterrorr({ConfirmPassword:false});
                        }}
    return (
    <div>
    <form >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => validateFirstName(e) } />
                {errorr.FirstName ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => validatesetLastName(e) } />
                {errorr.LastName ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => validateemail(e) } />
                {errorr.email ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => validatepassword(e) } />
                {errorr.password ?  <p style={{color:"red"}}>password not confirmed !</p>: ""}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => validateConfirmPassword(e) } />
                {errorr.ConfirmPassword ?  <p style={{color:"red"}}>password not confirmed !</p>: ""}
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