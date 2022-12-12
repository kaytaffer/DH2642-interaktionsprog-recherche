import React from "react";
import StartScreenView from "../view/startScreenView";
import {useNavigate} from "react-router-dom";

function StartScreen() {

    const navigate = useNavigate()

    function navigateToGameCB(){
        navigate("/game");
    }

    return (
        <div>
            <StartScreenView onGameStart = {navigateToGameCB}/>
        </div>
    )
}
export default StartScreen;
