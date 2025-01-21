import { Link } from "react-router-dom";

const StartScreen = ({ onClick }) => {
  const quotesArray = [
    "Prepare your neurons—it's game time!",
    "Bazinga! Are your reflexes ready for action?",
    "Activate gaming protocol: Are you prepared?",
    "Engage in fun... commencing in 3, 2, 1—ready?",
    "Your puny human brain ready to face me?",
    "The Big Bang begins now—are you set to implode?",
  ];

  const randInt = Math.floor(Math.random() * quotesArray.length);

  return (
    <div className="route start-screen">
      <div className="start-screen-content-container">
        <p className="start-screen-text">"{quotesArray[randInt]}"</p>
        <Link to="/game">
          <button className="start-screen-button" onClick={onClick}>
            READY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartScreen;
