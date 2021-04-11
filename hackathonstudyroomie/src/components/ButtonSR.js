import React, { useState, useEffect } from 'react';
import "../css/ButtonSR.css"




function ButtonSR({name}) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetchZoomData()
      },[count]);

    const fetchZoomData = () =>{
        console.log("helo")
        console.log({name})

    }

    return (
        <div>
            <h1 className="ButtonSR__button" onClick={()=>setCount((count + 1))
            
            }>Join the group {name}</h1>
        </div>
    )
}

export default ButtonSR
