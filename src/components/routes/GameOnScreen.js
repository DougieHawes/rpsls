import { useState, useEffect } from "react";

import { FaQuestionCircle } from "react-icons/fa";
import {
  GiStoneBlock,
  GiNotebook,
  GiLizardman,
  GiSpockHand,
} from "react-icons/gi";
import { MdContentCut } from "react-icons/md";

const GameOnScreen = () => {
  const [currentChamber, setCurrentChamber] = useState(0);
  const [bulletChamber, setBulletChamber] = useState(
    Math.floor(Math.random() * 5)
  );

  const getRoundResult = (userChoice) => {
    const computerChoice = Math.floor(Math.random() * 5);
    const distracted = Math.floor(Math.random() * 20);

    const distractedArray = [
      "Jeepers! My brain was too busy optimising the perfect move!",
      "Dammit, Me-ma called right as I was about to dominate!",
      "Wait! I was recalculating the statistical probabilities—again!",
      "I was too slow! You can’t rush genius! Strategy requires meticulous precision!",
      "Leonard distracted me with his predictable mediocrity!",
      "I wasn't ready! A flaw in my logic matrix—must debug immediately!",
    ];
    const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

    if (distracted === 10) {
      console.log(
        distractedArray[Math.floor(Math.random() * 5)] + " You win this round"
      );
    } else {
      console.log("YOU: " + choiceArray[userChoice]);
      console.log("SHELDON: " + choiceArray[computerChoice] + computerChoice);

      function determineWinner(UC, CC) {
        const winningConditions = {
          0: [2, 3],
          1: [0, 4],
          2: [1, 3],
          3: [1, 4],
          4: [0, 2],
        };

        if (UC === CC) {
          console.log(`Ah! You picked ${choiceArray[UC]} too, let's go again`);
          return;
        }

        const fireGun = (lastWinner, CC, BC) => {
          if (CC === BC) {
            if (lastWinner === "computer") {
              console.log("BANG!! YOU LOSE");
            } else {
              console.log("BANG!! I LOSE");
            }
            setCurrentChamber(0);
            setBulletChamber(Math.floor(Math.random() * 5));
          } else {
            if (lastWinner === "computer") {
              console.log("Click!! You live to see another round.");
            } else {
              console.log("Click!! I live to see another round.");
            }
          }

          setCurrentChamber(currentChamber + 1);
        };

        if (winningConditions[UC].includes(CC)) {
          console.log("Dammit! How could you beat me?!");
          fireGun("player", currentChamber, bulletChamber);
        } else {
          console.log("I WIN!! Don't feel too bad, you're just a muggle");
          fireGun("computer", currentChamber, bulletChamber);
        }
      }

      determineWinner(userChoice, computerChoice);
    }
  };

  return (
    <div className="route game-on-screen">
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
        <div className="void-choice">
          <FaQuestionCircle />
        </div>
        <div className="choice">
          <GiSpockHand onClick={() => getRoundResult(4)} />
        </div>
      </div>
    </div>
  );
};

export default GameOnScreen;
