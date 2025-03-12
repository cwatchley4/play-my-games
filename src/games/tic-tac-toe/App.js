import { useState } from "react";
import "./styles.css";

export default function App() {
  const [startGame, setStartGame] = useState(false);

  function handleStartGame() {
    setStartGame(true);
  }

  return (
    <div className="ttt__app">
      {startGame ? <TicTacToe /> : <StartMenu onStartGame={handleStartGame} />}
    </div>
  );
}

function StartMenu({ onStartGame }) {
  return (
    <div className="ttt__start-menu">
      <h1 className="ttt__title">Tic Tac Toe</h1>
      <button className="btn--start" onClick={onStartGame}>
        Start
      </button>
    </div>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(board) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "Draw";
  }

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = board.map((cell, i) =>
      i === index ? (isXNext ? "X" : "O") : cell
    );

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = checkWinner(board);

  console.log(board);

  return (
    <div className="ttt__game">
      <h1 className="ttt__title">Tic Tac Toe</h1>
      <h2 className="ttt__message">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>

      <div className="ttt__board">
        {board.map((cell, i) => (
          <button
            className="ttt__square"
            key={i}
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && (
        <button className="btn--reset" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
}
