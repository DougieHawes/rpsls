import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { userLoseArray, userWinArray } from "./textArrays";

const GameOverScreen = ({ winner }) => {
  const [quote, setQuote] = useState("");
  const [countdown, setCountdown] = useState(9);

  const navigate = useNavigate();

  useEffect(() => {
    const gameOverArray = winner === "user" ? userWinArray : userLoseArray;

    setQuote(gameOverArray[Math.floor(Math.random() * gameOverArray.length)]);
  }, [quote]);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="route game-over-screen">
      <div className="countdown">{countdown}</div>
      <h2 className="game-over-screen-title">
        {winner === "user" ? "YOU WIN" : "YOU LOSE"}
      </h2>
      <p className="game-over-screen-subtitle">"{quote}"</p>
      <div className="game-over-screen-buttons">
        <Link to="/" className="game-over-screen-button">
          HOME
        </Link>
        <Link to="/game" className="game-over-screen-button game-over-restart">
          TRY AGAIN
        </Link>
      </div>
    </div>
  );
};

export default GameOverScreen;
