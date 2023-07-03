import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Show_number from './components/Show_number';
import Show_word from './components/Show_word';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:id" element={<Show_number/>}/>
      <Route path="/:word/:color1/:color2" element={<Show_word/>}/>


    </Routes>
    </div>
  );
}

export default App;
