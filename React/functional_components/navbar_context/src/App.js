import React,{useState} from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Formwrapper from "./components/Formwrapper";
export const MyContext = React.createContext();
function App() {
  const [name, setname] = useState("");
  return (
    <MyContext.Provider value={[name, setname]}>
    <Wrapper>
            <Navbar/>
            <Formwrapper/>
    </Wrapper>
  </MyContext.Provider>);
}

export default App;
