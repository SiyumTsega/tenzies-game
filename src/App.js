import React from "react";
import "./App.css";
import Die from "./Die";

function App() {

 const [dice, setDice] = React.useState(allNewDice())

 function allNewDice(){
  const newDice = []
  for (let i = 0; i<10; i++){
  newDice.push({
    value: Math.ceil(Math.random() *6),
    isHeld: false
})
  }
  return newDice
 }
  
  function rollDice(){
    setDice(allNewDice())
  }
  
 const diceElement = dice.map(die => <Die value = {die.value} isHeld = {die.isHeld}/>)

  return (
    <main>
      <div className ='dice-container' >
        {diceElement}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
