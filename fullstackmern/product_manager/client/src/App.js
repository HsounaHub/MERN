import Form from './components/Form';
import Main from './components/Main';
import ShowOne from './components/Showone';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Products/:id' element={<ShowOne />} />
      </Routes>
    </div>
  );
}

export default App;
