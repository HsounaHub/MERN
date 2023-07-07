import Form from './components/Form';
import Main from './components/Main';
import ShowOne from './components/Showone';
import Update from './components/Update';
import './App.css';
import {useState } from "react"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [update, setupdate] = useState({})
  return (
    <div className="App">
      <Form setupdate={setupdate}/>
      <Routes>
      <Route path='/' element={<Main update={update}/>} />
      <Route path='/Products/:id' element={<ShowOne />} />
      <Route path='/Products/edit/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
