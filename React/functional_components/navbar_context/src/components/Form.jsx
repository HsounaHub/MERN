import React,{useContext } from 'react'
import { MyContext } from '../App';
function Form() {
    const [name, setname] = useContext(MyContext);
  return (
    <div>
        <form >
        Your name: <input onChange={(e)=>{setname(e.target.value)}} value={name}/>
        </form>
    </div>
  )
}

export default Form