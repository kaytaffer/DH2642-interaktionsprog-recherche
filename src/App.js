import './App.css';
import Game from "./presenter/gamePresenter";
import React from "react";

export default
function App(props) {
  return (
    <div className="App">
        <Game model ={props.model}/>
    </div>
  );
}

