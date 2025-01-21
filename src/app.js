import { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";

import sheldon from "./sheldon.png";

import music from "./videoplayback.weba";

import StartScreen from "./components/routes/StartScreen";
import RulesScreen from "./components/routes/RulesScreen";
import GameScreen from "./components/routes/GameScreen";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="app">
      <audio ref={audioRef} src={music} loop autoPlay />
      <header className="header">
        <Link to="/">
          <img className="sheldon" src={sheldon} alt="" />
          <h1 className="title">R.P.S.L.S</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<StartScreen onClick={handleMusic} />} />
        <Route path="/rules" element={<RulesScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
      <footer className="footer">
        <a className="footer-text">
          passionately programmed by <span>Dougie Hawes</span> click here for
          more projects
        </a>
      </footer>
      <Link className="rules-page-link" to="/rules">
        RULES
      </Link>
    </div>
  );
};

export default App;
