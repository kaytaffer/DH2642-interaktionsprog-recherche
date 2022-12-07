import React, {useState} from "react";
import WordInput from "./wordInputPresenter";
import ScoreBoard from "./scoreBoardPresenter";
import {roundLength} from "../utilities/gameUtilities";
import Countdown, {zeroPad} from "react-countdown";
import StartScreen from "./startScreenPresenter";

//TODO wrapper for other sub-components

function Game() {
    const [gameStarted, setGameStarted] = useState(false);
    const [roundOver, setRoundOver] = useState(false);

    function roundOverACB() {
        setRoundOver(true);
    }

    function gameStartedACB() {
        setGameStarted(true);
    }

    // Determines how the time is displayed. View issue? But dependent on react things
    const renderer = ({ minutes, seconds }) => (
        <span>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );

    if(!gameStarted) return (
        <div>
            <StartScreen onGameStart={gameStartedACB}/>
        </div>
    )
    if(!roundOver) return (
        <div>
            <React.Suspense fallback={<div> Loading... </div>}>
                <Countdown date={Date.now() + roundLength * 1000} onComplete={roundOverACB}
                       precision={3} daysInHours={true} renderer={renderer}/>
                <WordInput/>
            </React.Suspense>
        </div>
    )
    return (
        <div>
            <React.Suspense fallback={<div> Loading... </div>}>
                <ScoreBoard/>
            </React.Suspense>
        </div>
    )
}
export default Game;