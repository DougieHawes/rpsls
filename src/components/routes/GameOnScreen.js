import { useState } from "react";
import { Link } from "react-router-dom";

import { FaQuestionCircle } from "react-icons/fa";
import {
  GiStoneBlock,
  GiNotebook,
  GiLizardman,
  GiSpockHand,
} from "react-icons/gi";
import { MdContentCut } from "react-icons/md";

import { randomNumber, determineWinner, fireGun } from "./functions";
import { choiceArray } from "./textArrays";

const GameOnScreen = ({ setWinner }) => {
  const [currentChamber, setCurrentChamber] = useState(0);
  const [bulletChamber, setBulletChamber] = useState(
    Math.floor(Math.random() * 6)
  );
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [nextRoundButton, setNextRoundButton] = useState(false);
  const [gameOverButton, setGameOverButton] = useState(false);

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const [shootResult, setShootResult] = useState("");
  const [screenText, setScreenText] = useState("");

  const getRoundResult = (UC) => {
    setScreenText("");
    setButtonsDisabled(true);

    const CC = randomNumber(5);

    setUserChoice(choiceArray[UC]);
    setComputerChoice(choiceArray[CC]);

    const roundResult = determineWinner(UC, CC);

    setScreenText(roundResult[0]);

    if (roundResult[1] === "tie") {
      setNextRoundButton(true);
    } else {
      if (roundResult[1] === "win") {
        const shootResult = fireGun("computer", currentChamber, bulletChamber);
        setShootResult(shootResult[0]);
        if (shootResult[1] === "BANG") {
          setWinner("user");
          setGameOverButton(true);
        } else {
          setNextRoundButton(true);
        }
      } else {
        const shootResult = fireGun("user", currentChamber, bulletChamber);
        setShootResult(shootResult[0]);
        if (shootResult[1] === "BANG") {
          setWinner("computer");
          setGameOverButton(true);
        } else {
          setNextRoundButton(true);
        }
      }
      setCurrentChamber(currentChamber + 1);
    }
  };

  const clearFields = () => {
    setButtonsDisabled(false);
    setUserChoice("");
    setComputerChoice("");
    setShootResult("");
    setScreenText("");
    setNextRoundButton(false);
  };

  return (
    <div className="route game-on-screen">
      {!buttonsDisabled && (
        <div className="choice-container">
          <div className="choice">
            <GiStoneBlock onClick={() => getRoundResult(0)} />
          </div>
          <div className="choice">
            <GiNotebook onClick={() => getRoundResult(1)} />
          </div>
          <div className="choice">
            <MdContentCut onClick={() => getRoundResult(2)} />
          </div>
          <div className="choice">
            <GiLizardman onClick={() => getRoundResult(3)} />
          </div>
          <div className="void-choice-container">
            <div className="void-choice">
              <FaQuestionCircle />
            </div>
          </div>
          <div className="choice">
            <GiSpockHand onClick={() => getRoundResult(4)} />
          </div>
        </div>
      )}
      <div className="results-text">
        {userChoice && (
          <p className="game-on-text user-choice">You chose {userChoice}</p>
        )}
        {computerChoice && (
          <p className="game-on-text computer-choice">
            I chose {computerChoice}
          </p>
        )}
        {screenText && <p className="game-on-text screen-text">{screenText}</p>}
        {shootResult && (
          <p className="game-on-text shoot-result">{shootResult}</p>
        )}
      </div>
      {nextRoundButton && (
        <button className="next-button" onClick={clearFields}>
          NEXT
        </button>
      )}
      {gameOverButton && (
        <Link to="/gameover">
          <button className="next-button">NEXT</button>
        </Link>
      )}
    </div>
  );
};

export default GameOnScreen;
