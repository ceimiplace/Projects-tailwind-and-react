import React from "react"
import { useState } from "react"
const Accordion  = ({items}) =>{
const [activeIndex,setActiveIndex] = useState(null)
function onActiveClick(index){
    if(index === activeIndex){
        setActiveIndex(null)
        console.log(index,activeIndex)
        return;
    }
    setActiveIndex(index)
    
}
function hiddenOrShow(index){
    if(index === activeIndex){
        return "active";
    }else{
        return "hidden"
    }
}
 const list = items.map((item,index)=><div className="border-2 border-slate-200 p-6" key={item.title}>
    <div onClick={()=>onActiveClick(index)} className="font-bold text-lg mb-2 hover:text-zinc-400  cursor-pointer"><i className="fa-solid fa-arrow-down mr-2"></i>{item.title}</div>
    <div className={` ${hiddenOrShow(index)} transition-all `} >{item.content}</div>
 </div>)
 return <div className="max-w-xl">{list}  </div>
}
export default Accordion;