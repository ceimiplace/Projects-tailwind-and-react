import { useState,useEffect } from "react"
export default function Translate({languages}){
    const [language,setLanguage] = useState("")
    const [textToBeTranslated, setTextToBeTranslated] = useState("Dummy text")
    const [translation,setTranslation] = useState("")
    const optionsToRender = languages.map(elem=><option key={elem.value}  value={elem.value}>{elem.name}</option>)    
    useEffect(()=>{
        const token = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
        const options = {
            method:"POST",
            headers: {"Content-Type": "application/json",
               },
            body:JSON.stringify({
                q: textToBeTranslated,
                source: language,
                target: translation,
                format: "text",
              })
        }
        console.log(language)
        async function handle(){
         let response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${token}`,options)
         let data = await response.json()
         
        }
        handle();
    },[language,textToBeTranslated,translation])
   
    return <div className="flex">
            <div>
                <label htmlFor="languages">Select origin language:</label>
                <select onChange={(event)=>setLanguage(event.target.value)} id="languages" >{optionsToRender}</select>
                <textarea className="block" rows="6" cols="50" value={textToBeTranslated} onChange={(e)=>setTextToBeTranslated(e.target.value)}/>
            </div>
            <div><label>Select language to translate to :</label>
            <select onChange={(event)=>{setTranslation(event.target.value)}}>{optionsToRender}</select></div>
            
        </div>
}