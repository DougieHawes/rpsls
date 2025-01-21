import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import sheldon from "./sheldon.png";

import music from "./videoplayback.weba";

import StartScreen from "./components/routes/StartScreen";
import GameScreen from "./components/routes/GameScreen";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play();
      }
    };

    document.body.addEventListener("click", handleUserInteraction);

    return () => {
      document.body.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div className="app">
      <audio ref={audioRef} src={music} loop autoPlay />
      <header className="header">
        <img className="sheldon" src={sheldon} alt="" />
        <h1 className="title">R.P.S.L.S</h1>
      </header>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
      <footer className="footer">
        <a className="footer-text">
          passionately programmed by <span>Dougie Hawes</span> click here for
          more projects
        </a>
      </footer>
    </div>
  );
};

export default App;
