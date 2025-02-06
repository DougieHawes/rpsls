import { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { FaScroll } from "react-icons/fa";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

import sheldon from "./media/sheldon.png";

import music from "./media/videoplayback.weba";

import StartScreen from "./components/routes/StartScreen";
import RulesScreen from "./components/routes/RulesScreen";
import GameOnScreen from "./components/routes/GameOnScreen";
import GameOverScreen from "./components/routes/GameOverScreen";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const onMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="app">
      {/* <audio ref={audioRef} src={music} loop autoPlay /> */}
      <header className="header">
        <Link to="/">
          <div className={`sheldon-wrapper ${isPlaying && "sheldon-move"}`}>
            <img
              className={`sheldon ${isPlaying && "sheldon-dancing"}`}
              src={sheldon}
              alt=""
            />
          </div>
          <h1 className="title">R.P.S.L.S</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<StartScreen onClick={onMusic} />} />
        <Route path="/rules" element={<RulesScreen />} />
        <Route path="/game" element={<GameOnScreen />} />
      </Routes>
      <footer className="footer">
        <a className="footer-text">
          passionately programmed by <span>Dougie Hawes</span> click here for
          more projects
        </a>
      </footer>
      <Link className="upper-button rules-page-link" to="/rules">
        <FaScroll />
      </Link>
      <div className="upper-button music-toggle" onClick={handleMusic}>
        {isPlaying ? <BiVolumeMute /> : <BiVolumeFull />}
      </div>
    </div>
  );
};

export default App;
