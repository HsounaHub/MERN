import Form from "./components/Form";
import {Route, Routes, Link} from 'react-router-dom';
import Show_data from "./components/Show_data";

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
      <Route path="/:type/:id" element={<Show_data/>}/>
    </Routes>
    </div>
  );
}

export default App;
