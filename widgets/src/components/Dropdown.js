import { useState ,useEffect,useRef} from "react"
export default function Dropdown({options}){
 const [status,setStatus] = useState("hidden")
 const [select,setSelect]= useState("Select a option")
 const ref = useRef();
 
 useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
        if(!ref.current.contains(e.target)){
            setStatus("hidden")
        }
    })
 },[])
 function showOrHide(){console.log("click")
    if(status === "hidden"){
        setStatus("block")
    } else{
        setStatus("hidden")
    }
 }
    const renderedOptions=options.map(elem=>{ 
        if(elem.label === select){return null}
        else{ return <div className="hover:bg-slate-300 my-2" onClick={()=>setSelect(elem.label)} key={elem.value}>{elem.label}</div>}} 
    )
    
    return <div ref={ref} className="p-2 rounded border-2 max-w-xs border-slate-500  cursor-pointer" onClick={showOrHide}><p className="flex justify-between"><span>{select}</span> <i className="fa-sharp fa-solid fa-caret-down"/></p>
    <div className={`${status}`}>{renderedOptions}</div>
    </div>
}