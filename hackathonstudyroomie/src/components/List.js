import React from 'react'

import  ButtonSR from "./ButtonSR"
import "../css/List.css"

function List() {
  
    return (
        <div id="list">
            <div className="list">
                <ButtonSR name = "Engineering"></ButtonSR>
                <ButtonSR name = "Mathematics" ></ButtonSR>
                <ButtonSR name = "Artificial Intelligence" ></ButtonSR>
                <ButtonSR name = "Machine Learing"></ButtonSR>
                <ButtonSR name = "Science"></ButtonSR>
            </div>
        </div>
    )
}

export default List
