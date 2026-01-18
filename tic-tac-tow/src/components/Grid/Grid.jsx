import { useState } from "react";
import { Card } from "../Card/Card";
import "./grid.css";
import { toast } from "react-toastify";
import { calculateWinner } from "../../helpers/checkWinner";

export const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(false); //false = X true = O
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  function handlePlay(index) {
    if (winner) return; // no moves after game over
    // ignore clicks on already filled cells
    if (board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = turn ? "0" : "X";
    setBoard(newBoard);
    const currentSymbol = turn ? "0" : "X";

    if (calculateWinner(newBoard, currentSymbol)) {
      setWinner(currentSymbol);
      return;
    }

    if (newBoard.every((cell) => cell !== "")) {
      toast.info("It's a draw!",{
        position: "top-center",
      });
      setWinner("No one");
      return;
    }

    setTurn(!turn);
  }
  function resetGame() {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(false);
  }
  return (
    <>
      {winner && 
      <>
      <h1 className="winner-highlight">Player {winner} wins!</h1>
      <button onClick={resetGame} className="btn">Restart Game</button>
      </>
      }
      <h1 className="turn-highlight">Current Turn: {turn ? "0" : "X"}</h1>
      <div className="grid">
        {board.map((value, index) => (
          <Card onPlay={handlePlay} key={index} player={value} index={index} winner={winner} />
        ))}
      </div>
    </>
  );
};
