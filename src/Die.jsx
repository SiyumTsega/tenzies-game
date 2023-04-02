import React from "react";
import './Die.css'

function Die(props){
   const styles = {
    backgroundColor: props.isHeld? 'green' : 'white'
   }

    return(
        <div className="die-face" style = {styles}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

export default Die;