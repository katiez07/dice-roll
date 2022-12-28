import React from "react";
import Dice from "./Dice.jsx";

function getRandomDieNumber() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  function randomDice() {
    return [
      getRandomDieNumber(),
      getRandomDieNumber(),
      getRandomDieNumber(),
      getRandomDieNumber(),
      getRandomDieNumber(),
      getRandomDieNumber(),
    ];
  }

  const [dice, setDice] = React.useState(randomDice());

  function rollDice() {
    setDice(randomDice());
  }

  return (
    <>
      <div className="App">
        <Dice
          // colors={[
          //   "#fef0fe",
          //   "#0ffefe",
          //   "#0a0afa",
          //   "#1f98f3",
          //   "#001000",
          //   "#4ff44f",
          // ]}
          numbers={dice}
        />
      </div>
      <div>
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    </>
  );
}

export default App;
