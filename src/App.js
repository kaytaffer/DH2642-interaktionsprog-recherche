import './App.css';
import Game from "./presenter/gamePresenter";
import React from "react";
import { RecoilRoot } from 'recoil';

export default
function App() {
  return (
      <RecoilRoot>
        <div className="App">
            <Game/>
        </div>
      </RecoilRoot>
  );
}

