import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
const items = [{title : "What is React?",content:"React is front-end javascript framework"},{title:"Why use React?",content:"React is a favorite JS library among engineers"},
{title:"How do you use React?",content : "You use react by creating components"}]
const options = [{label:"The color Red" , value:"Red"},{label:"The color Blue",value:"Blue"}]
function App() {
  return (
    <div className="App w-full h-full boder-red-200 border-2">
     {/* <Accordion items={items}/> */}
     {/* <Search/> */}
     <Dropdown options={options}/>
    </div>
  );
}

export default App;
