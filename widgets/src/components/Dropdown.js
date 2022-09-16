import { useState } from "react"
export default function Dropdown({options}){
 const [status,setStatus] = useState("hidden")
 const [select,setSelect]= useState("Select a option")
 function showOrHide(){
    if(status == "hidden"){
        setStatus("block")
    } else{
        setStatus("hidden")
    }
 }
    const renderedOptions=options.map(elem=><div onClick={()=>setSelect(elem.label)} key={elem.value}>{elem.label}</div>)
    return <div onClick={showOrHide}><p>{select} <i className="fa-sharp fa-solid fa-caret-down"/></p>
    <div className={status}>{renderedOptions}</div>
    </div>
}