import PersonCard from "./components/PersonCard";
const data=[{
  firstName:'Doe',
  lastName:'Jane',
  age:45,
  hairColor:'Black'
},{
  firstName:'Smith',
  lastName:'john',
  age:88,
  hairColor:'Brown'
},{
  firstName:'Fillmore',
  lastName:'Milliard',
  age:50,
  hairColor:'Brown'
},{
  firstName:'Smith',
  lastName:'Maria',
  age:62,
  hairColor:'Brown'
}
]
function App() {
  return (
    <div className="App">
      {data.map((person,idx) => {
        return <PersonCard person={person} key={idx}/>
      })}
    </div>
  );
}

export default App;
