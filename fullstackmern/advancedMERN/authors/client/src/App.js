import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import AutherList from './components/AutherList';
import Create_auther from './components/Create_auther';
import Update_auther from './components/Update_auther';
function App() {
  return (
    <div className="App">
      <h1>Facorite authors</h1>
      <Routes>
        <Route path='/' element={<AutherList />} />
        <Route path='/new' element={<Create_auther />} />
        <Route path='/edit/:id' element={<Update_auther />} />
      </Routes>
    </div>
  );
}

export default App;
