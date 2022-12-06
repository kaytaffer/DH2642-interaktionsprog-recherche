import React from "react";
import StartScreenView from "../view/startScreenView";

function StartScreen(props) {

    return (
        <div>
            <StartScreenView onGameStart={props.onGameStart}/>
        </div>
    )
}
export default StartScreen;