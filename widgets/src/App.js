import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [{title : "What is React?",content:"React is front-end javascript framework"},{title:"Why use React?",content:"React is a favorite JS library among engineers"},
{title:"How do you use React?",content : "You use react by creating components"}]
const options = [{label:"The color Red" , value:"Red"},{label:"The color Blue",value:"Blue"}]
const languages = [{name:"English",value:"en"},{name:"French",value:"fr"},{name:"German",value:"de"},{name:'Romanian',value:"ro"},{name:"Finnish",value:"fi"}]
function App() {
  return (
    <div className="App w-full h-full boder-red-200 border-2">
     {/* <Accordion items={items}/> */}
     {/* <Search/> */}
     {/* <Dropdown options={options}/> */}
     <Translate languages={languages}/>
    </div>
  );
}

export default App;
