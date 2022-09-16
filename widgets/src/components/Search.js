import { useState,useEffect } from "react"
import axios from "axios"
export default function Search(){
    
    const [term,setTerm] = useState("dog")
   const [results,setResults] = useState([])
    useEffect(()=>{
        
        async function getData(){
            const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${term}`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data)                
            setResults(data.query.search)
        }
        if(term && results.length===0){getData() }else{
            let timeoutId = setTimeout( getData, 500);
            return ()=>{
             clearTimeout(timeoutId)
            }
        }
       
      
    },[term])
    function removeSpan(text){        
        text = text.replaceAll(`<span class="searchmatch">`, " ")
        text = text.replaceAll(`</span>`, " ")         
        return text;
    }
    return <div className="search-container p-4 max-w-7xl mx-auto">
        <form onSubmit={e=>e.preventDefault()} className="mb-4">
            <label className="font-bold">Enter search term</label>
            <input value={term} onChange={e=>setTerm(e.target.value)} className = "block border-2 w-full border-slate-400 p-1"type="text"/>
        </form>
        <div className="list-none">
            {results.map(elem=><div key={elem.pageid} className="p-2 bt-slate-400 border-2"><span className="font-bold">{elem.title}</span>-{removeSpan(elem.snippet)}... <button className="bg-slate-200 p-1 block rounded ml-auto"><a href={`https://en.wikipedia.org/?curid=${elem.pageid}`}>Read more</a></button></div>)}
        </div>
    </div>
}