import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const GameOverScreen = ({ onClick }) => {
  const [quote, setQuote] = useState("");
  const [countdown, setCountdown] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    const quotesArray = [
      "Well, that was a valiant attempt. But, of course, it was doomed to failure. You’re no match for my superior intellect.",
      "You know, if you'd studied quantum mechanics or had an encyclopedic knowledge of string theory, perhaps you could have done better. But then again, who could?",
      "How... delightful. You’ve achieved the gaming equivalent of a Schrödinger’s cat – both dead and a failure at the same time.",
      "A valiant effort. But your defeat was as inevitable as the second law of thermodynamics. No one escapes entropy.",
      "It's not your fault. It's simply the limitations of your inferior brain. Not everyone can operate at a genius level like I can.",
      "I suppose you did your best... which, by definition, is a rather sad commentary on your capabilities.",
    ];

    const randInt = Math.floor(Math.random() * quotesArray.length);

    setQuote(quotesArray[randInt]);
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
      <h2 className="game-over-screen-title">GAME OVER</h2>
      <p className="game-over-screen-subtitle">"{quote}"</p>
      <div className="game-over-screen-buttons">
        <Link to="/" className="game-over-screen-button">
          HOME
        </Link>
        <div
          onClick={onClick}
          className="game-over-screen-button game-over-restart"
        >
          TRY AGAIN
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
