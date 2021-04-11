import React, { useState, useEffect } from 'react';
import "../css/ButtonSR.css"
import { Link } from 'react-router-dom'




function ButtonSR({name}) {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     fetchZoomData()
    //   },[count]);

    // const fetchZoomData = () =>{
    //     console.log("helo")
    //     console.log({name})
    

    // }

    return (
        <div>
            <Link to={'/Videroom'}>
            <h1 className="ButtonSR__button" >Join the group {name}</h1>
            </Link>
        </div>
    )
}

export default ButtonSR
