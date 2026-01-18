import { useState } from "react";
import { Card } from "../Card/Card";
import "./grid.css";

export const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(false); //false = X true = O
  function handlePlay() {
    setTurn(!turn);
  }
  return (
    <>
      <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {Array(numberOfCards)
          .fill(null)
          .map((_, index) => (
            <Card onPlay={handlePlay} key={index} />
          ))}
      </div>
    </>
  );
};
