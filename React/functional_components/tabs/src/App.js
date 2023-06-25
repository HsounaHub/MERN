import Tabs from "./components/Tabs";
import { useState } from "react";
import Content from "./components/Content";


function App() {
const tabs = [
    {
      label: 'Tab 1',
      content: 'Tab 1 content is Showing here.',
    },
    {
      label: 'Tab 2',
      content: 'Tab 2 content is Showing here.',
    },
    {
      label: 'Tab 3',
      content: 'Tab 3 content is Showing here.',
    },
  ];
  const [activetab,setactivetab]=useState(0)
  return (
    <div className="App">
      <div>
      {tabs.map((item,idx)=>{
        return <Tabs item={item} idx={idx} setactivetab={setactivetab} key={idx}/>
      })}</div>
      <div>
        <Content tab={tabs[activetab]}/>
      </div>
    </div>
  );
}

export default App;
