import { useState } from "react"
export default function Search(){
    
    const [term,setTerm] = useState("")
    console.log(term)
    return <div className="search-container p-4">
        <form onSubmit={e=>e.preventDefault()} className="">
            <label className="font-bold">Enter search term</label>
            <input value={term} onChange={e=>setTerm(e.target.value)} className = "block border-2 w-full border-slate-400 p-1"type="text"/>
        </form>
    </div>
}