export default function Translate(){
     const token ="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"    
    const options = {
        method:"POST",
        headers: {"Content-Type": "application/json",
           },
        body:JSON.stringify({
            q: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.",
            source: "en",
            target: "es",
            format: "text",
          })
    }
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${token}`,options).then(resp=>resp.json()).then(data=>console.log(data))
    return <div>Hy</div>
}