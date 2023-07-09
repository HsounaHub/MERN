import React, { useState } from 'react'

function Form(props) {
    const { initialname, onSubmitProp } = props;
    const [name, setname] = useState(initialname);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name},setname);
    }
  return (
    <form onSubmit={onSubmitHandler}>
            <p>
                <label>Auther Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setname(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
  )
}

export default Form