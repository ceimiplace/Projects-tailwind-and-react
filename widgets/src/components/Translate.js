import { useState } from "react"
export default function Translate(){
    const [language,setLanguage] = useState("")
    const [textToBeTranslated, setTextToBeTranslated] = useState("")
    const [translation,setTranslation] = useState("")
     const token ="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"    
    const options = {
        method:"POST",
        headers: {"Content-Type": "application/json",
           },
        body:JSON.stringify({
            q: textToBeTranslated,
            source: language,
            target: "es",
            format: "text",
          })
    }
    //fetch(`https://translation.googleapis.com/language/translate/v2?key=${token}`,options).then(resp=>resp.json()).then(data=>console.log(data))
    return <div className="flex items-center">
            <div>
                <label htmlFor="languages">Select a language:</label>
                <select id="languages" >
                    <option value="english">english</option>
                    <option>french</option>
                </select>
                <textarea className="block" rows="6" cols="50" />
            </div>
            <p className=" ml-4 inline"></p>
        </div>
}