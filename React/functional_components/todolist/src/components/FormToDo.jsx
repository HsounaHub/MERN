import React,{useState} from 'react'

function FormToDo(props) {
    const [todo, settodo] = useState("");
    const handleForm = (e) =>{
        e.preventDefault();
        props.settodolist([...props.todolist, todo])
        settodo('')
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleForm(e)}}>
        Task: <input onChange={(e)=>{settodo(e.target.value)}} value={todo}/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default FormToDo