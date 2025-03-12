import { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import ScoreDisplay from "./components/ScoreDisplay";
import Button from "./components/Button";
import "./styles.css";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });
  const [startGame, setStartGame] = useState(false);

  function handleChoice(children) {
    const choices = ["rock", "paper", "scissors"];

    setPlayerChoice(children);

    setTimeout(() => {
      const compChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(compChoice);
      setTimeout(() => {
        if (children === compChoice) {
          setWinner("tie");
        } else if (
          (children === "rock" && compChoice === "scissors") ||
          (children === "paper" && compChoice === "rock") ||
          (children === "scissors" && compChoice === "paper")
        ) {
          setWinner("player");
          setScore((prev) => {
            const newScore = prev + 1;
            localStorage.setItem("score", newScore);
            return newScore;
          });
        } else {
          setWinner("computer");
          setScore((prev) => {
            const newScore = prev - 1;
            localStorage.setItem("score", newScore);
            return newScore;
          });
        }
      }, 1000);
    }, 1000);
  }

  function handlePlayAgain() {
    setComputerChoice(null);
    setPlayerChoice(null);
    setWinner(null);
  }

  function handleNewGame() {
    setScore(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
    localStorage.setItem("score", 0);
  }

  return (
    <div
      className={
        !startGame ? `rps__app-container--start` : `rps__app-container--game`
      }
    >
      {!startGame ? (
        <>
          <Header />
          <Button onClick={() => setStartGame(true)}>Start Game</Button>
        </>
      ) : (
        <>
          <Header />
          <GameBoard
            onChoice={handleChoice}
            playerChoice={playerChoice}
            computerChoice={computerChoice}
          />
          <ScoreDisplay score={score} winner={winner} />
          <div className="btn__container">
            <Button onClick={handlePlayAgain}>Play Again</Button>
            <Button onClick={handleNewGame}>New Game</Button>
          </div>
        </>
      )}
    </div>
  );
}
