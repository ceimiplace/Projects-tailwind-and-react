import { useState,useEffect } from "react"
export default function Translate({languages}){
    const [languageSource,setLanguage] = useState("en")
    const [languageTarget,setTarget] = useState("en")
    const [textToBeTranslated, setTextToBeTranslated] = useState("Dummy text")
    const [translation,setTranslation] = useState("")
    const optionsToRender = languages.map(elem=><option key={elem.value}  value={elem.value}>{elem.name}</option>)    
    console.log(typeof languageSource)
    useEffect(()=>{
        if(languageSource === languageTarget){return;}
        const token = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
            const options = {
            method:"POST",
            headers: {"Content-Type": "application/json",
               },
            body:JSON.stringify({
                q: textToBeTranslated,
                source: languageSource,
                target: languageTarget,
                format: "text",
              })
        }        
        async function handle(){
         let response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${token}`,options)
         let data = await response.json();
         console.log(data)     
           setTranslation(data.data.translations[0].translatedText)
        }
        let timeId=setTimeout(handle,500)
        return ()=>{
            clearTimeout(timeId)
        }

    },[languageSource,languageTarget,textToBeTranslated,])
   
    return <div className="flex p-4">
            <div>
                <label htmlFor="languages">Select origin language:</label>
                <select onChange={(event)=>setLanguage(event.target.value)} id="languages" >{optionsToRender}</select>
                <textarea className="block" rows="6" cols="50" value={textToBeTranslated} onChange={(e)=>setTextToBeTranslated(e.target.value)}/>
            </div>
            <div className="ml-4">
                <label>Select language to translate to: </label>
                <select onChange={(event)=>{setTarget(event.target.value)}}>{optionsToRender}</select>
                <p>{translation}</p>
            </div>
            
        </div>
}