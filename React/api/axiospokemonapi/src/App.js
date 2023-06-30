
import {useState} from "react";
import axios from 'axios';
function App() {
  const [pokemon, setpokemon] = useState([]);
  const axiospokemon = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((response) =>{
      setpokemon(response.data.results);
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="App">

         <button onClick={axiospokemon}>Fetch Pokemon</button>
           <ul>
            {pokemon.map((p)=>{
            return(<li>{p.name}</li>) })
            }
            </ul>
            </div>
  );
}

export default App;