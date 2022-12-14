import './App.css';
import Game from "./presenter/gamePresenter";
import React from "react";
import { RecoilRoot } from 'recoil';
import {Routes, Route} from "react-router-dom";
import StartScreen from "./presenter/startScreenPresenter";
import HamburgerMenu from "./presenter/hamburgerMenuPresenter";
import About from "./presenter/aboutPresenter";
import Rules from "./presenter/rulesPresenter";
import HighScore from "./presenter/highScorePresenter";
import GameScore from "./presenter/gameScorePresenter";

export default
function App() {
  return (
      <RecoilRoot>
        <div className="App">
            <div id="container">
                <HamburgerMenu/>
                <Routes>
                    <Route path ="/" element= {<StartScreen/>} />
                    <Route path ="/game" element={<Game/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/rules" element={<Rules/>} />
                    <Route path="/highscore" element={<HighScore/>} />
                    <Route path="/gamescore" element={<GameScore/>} />
                </Routes>
            </div>
        </div>
      </RecoilRoot>
  );
}

