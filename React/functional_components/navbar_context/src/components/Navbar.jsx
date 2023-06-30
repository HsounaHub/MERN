import React,{useContext} from 'react'
import { MyContext } from '../App';

function Navbar() {
    const [name, setname] = useContext(MyContext);
  return (
    <div>
        <h1>Hi,{name}</h1>
    </div>
  )
}

export default Navbar