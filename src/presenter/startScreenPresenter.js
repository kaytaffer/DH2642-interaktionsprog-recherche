import React from "react";
import StartScreenView from "../view/startScreenView";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function StartScreen() {
    const navigate = useNavigate()

    //Navigates to game and refreshes the necessary states.
    function startNewGameACB(){
        navigate("/game");
    }

    return (
        <StartScreenView onGameStart = {startNewGameACB}
                        Link={Link}/>
    )
}
export default StartScreen;
