import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaQuestionCircle } from "react-icons/fa";
import {
  GiStoneBlock,
  GiNotebook,
  GiLizardman,
  GiSpockHand,
} from "react-icons/gi";
import { MdContentCut } from "react-icons/md";

import GameOverScreen from "./GameOverScreen";

import { randomNumber, determineWinner, fireGun } from "./functions";
import { choiceArray, distractedArray } from "./textArrays";

const GameOnScreen = () => {
  const [currentChamber, setCurrentChamber] = useState(0);
  const [bulletChamber, setBulletChamber] = useState(
    Math.floor(Math.random() * 6)
  );
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const [roundResponse, setRoundResponse] = useState("");
  const [shootResult, setShootResult] = useState("");
  const [screenText, setScreenText] = useState("Make your choice...");

  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const getRoundResult = (UC) => {};

  return (
    <div className="route game-on-screen">
      {gameOver && <GameOverScreen winner={winner} />}
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
      <p className="game-on-text">{userChoice}</p>
      <p className="game-on-text">{computerChoice}</p>
      <p className="game-on-text">{roundResponse}</p>
      <p className="game-on-text">{shootResult}</p>
      <p className="game-on-text">{screenText}</p>
    </div>
  );
};

export default GameOnScreen;
