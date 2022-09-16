import { useState,useEffect } from "react"
import axios from "axios"
export default function Search(){
    
    const [term,setTerm] = useState("")
   const [results,setResults] = useState([])
    useEffect(()=>{
        if(!term){return;}
        async function getData(){
            const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${term}`
            const response = await fetch(url)
            const data = await response.json();                
            setResults(data.query.search)
        }
      getData();
      
    },[term])
    return <div className="search-container p-4">
        <form onSubmit={e=>e.preventDefault()} className="">
            <label className="font-bold">Enter search term</label>
            <input value={term} onChange={e=>setTerm(e.target.value)} className = "block border-2 w-full border-slate-400 p-1"type="text"/>
        </form>
        <div>
            {results.map(elem=><li key={elem.pageid}>{elem.title} {elem.snippet}</li>)}
        </div>
    </div>
}