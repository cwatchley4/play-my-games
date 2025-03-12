import RockPaperScissors from "./games/rock-paper-scissors/App";
import TicTacToe from "./games/tic-tac-toe/App";

import "./styles.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [chooseGame, setChooseGame] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" />
          <Route
            path="/rock-paper-scissors"
            element={
              <>
                <GameHeader />
                <RockPaperScissors />
              </>
            }
          />
          <Route
            path="/tic-tac-toe"
            element={
              <>
                <GameHeader />
                <TicTacToe />
              </>
            }
          />
        </Routes>
        <HomePage chooseGame={chooseGame} onChooseGame={setChooseGame} />;
      </Router>
    </>
  );
}

function HomePage({ chooseGame, onChooseGame }) {
  return (
    <div className="header__container">
      <h1 className="header__main-title">Play My Games</h1>
      <nav className="header__main-nav">
        <ul className="header__main-nav-list">
          <li
            data-game="rock-paper-scissors"
            onClick={(e) => onChooseGame(e.currentTarget.dataset.game)}
          >
            <Link className="nav-link" to="/rock-paper-scissors">
              Rock Paper Scissors
            </Link>
          </li>
          <li
            data-game="tic-tac-toe"
            onClick={(e) => onChooseGame(e.currentTarget.dataset.game)}
          >
            <Link className="nav-link" to="/tic-tac-toe">
              Tic Tac Toe
            </Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

function GameHeader() {
  return (
    <Link
      className="nav-link"
      style={{
        borderRadius: "0",
        borderBottomRightRadius: "10px",
        fontSize: "3rem",
      }}
      to="/"
    >
      Home
    </Link>
  );
}

function Footer() {
  return (
    <p className="website-text">
      Created by{" "}
      <a className="website-link" href="https://curtisatchley.com">
        Curtis Atchley
      </a>
    </p>
  );
}

// if (chooseGame === "rock-paper-scissors") return <RockPaperScissors />;
// if (chooseGame === "tic-tac-toe") return <TicTacToe />;
