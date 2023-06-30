import FormToDo from "./components/FormToDo";
import { useState } from 'react';
import Todo from "./components/Todo";

function App() {
  const [todolist,settodolist]=useState([])
  return (
    <div className="App">
      <FormToDo todolist={todolist} settodolist={settodolist}/>
      {todolist.map((item,idx)=>{
      return <Todo text={item} key={idx} setlist_to_do={settodolist} list={todolist} idx={idx}/>
      })}
      
    </div>
  );
}

export default App;
