import { useState } from "react";

import GameOverScreen from "./GameOverScreen";
import GameOnScreen from "./GameOnScreen";

const GameScreen = () => {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="route game-screen">
      {gameOver ? (
        <GameOverScreen onClick={() => setGameOver(false)} />
      ) : (
        <GameOnScreen onClick={() => setGameOver(true)} />
      )}
    </div>
  );
};

export default GameScreen;
