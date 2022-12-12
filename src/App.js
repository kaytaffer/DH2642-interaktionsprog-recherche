import './App.css';
import React from "react";
import { RecoilRoot } from 'recoil';
import {Routes, Route} from "react-router-dom";
import StartScreen from "./presenter/startScreenPresenter";
import Game from "./presenter/gamePresenter";

export default
function App() {
    return(
      <RecoilRoot>
          <Routes>
              <Route path ="/" element= {<StartScreen/>} />
              <Route path = "/game" element={<Game/>} />
          </Routes>
      </RecoilRoot>
  );
}

