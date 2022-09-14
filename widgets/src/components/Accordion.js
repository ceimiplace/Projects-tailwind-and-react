import React from "react"
import { useState } from "react"
const Accordion  = ({items}) =>{
const [activeIndex,setActiveIndex] = useState("null")
function onActiveClick(index){
    console.log("you clicked" , index)
}
 const list = items.map((item,index)=><div className="border-2 border-slate-200 p-6" key={item.title}>
    <div onClick={()=>onActiveClick(index)} className="font-bold text-lg mb-2"><i className="fa-solid fa-arrow-down mr-2"></i>{item.title}</div>
    <div>{item.content}</div>
 </div>)
 return <div className="max-w-xl">{list}</div>
}
export default Accordion;