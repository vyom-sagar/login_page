import { useEffect, useState } from "react";
import"./quotes.css"
export default function Quotes()
{
    const[qut,setQut]=useState("")
    useEffect(()=>{
        fetch("https://api.quotable.io/random")
        .then(res=>res.json())
        .then(data=>setQut(data))

    },[])
    return(<div className="qutoes">
          <h3>{qut.content}</h3>
          <p>-{qut.author}</p>
        </div>
    )
}