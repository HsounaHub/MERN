import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import Formcolor from './components/Formcolor'
function App() {
  const [colors,setcolor]=useState(["red","blue","purple"])
  return (
    <div className="App">
    <Formcolor setcolors={setcolor} colors={colors} />
      {colors.map((color,idx)=>{
        return <Box color={color} key={idx}/>
      })}
      
    </div>
  );
}

export default App;
