import React,{ useState } from 'react'

function Formcolor(props) {
    const [Color, setColor] = useState("");
    const handleForm = (e) =>{
        e.preventDefault();
        props.setcolors([...props.colors, Color])
        setColor('')
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleForm(e)}}>
        favColor: <input onChange={(e)=>{setColor(e.target.value)}} value={Color}/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Formcolor