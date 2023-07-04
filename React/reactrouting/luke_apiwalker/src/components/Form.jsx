import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [heroId, setHerId] = useState(1);
    const [typo, settypo] = useState("");

    const nav = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(heroId);
        nav(`/${typo}/${heroId}`)

    }

  return (
    <div>
        <form id='type' onSubmit={submitHandler} >
        Search for: <select name="type"  form="type" onChange={(e)=>{ settypo(e.target.value)}} value={typo}>
    <option value="people">people</option>
    <option value="planets">planets</option>
    </select>
          ID:  <input type="number" onChange={(e)=>{ setHerId(e.target.value)}} value={heroId} />
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form