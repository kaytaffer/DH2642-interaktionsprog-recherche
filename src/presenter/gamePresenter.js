import React, {useState} from "react";
import WordInput from "./wordInputPresenter";
import ScoreBoard from "./scoreBoardPresenter";
import {roundLength} from "../utilities/gameUtilities";
import Countdown, {zeroPad} from "react-countdown";
import Loading from "./loadingPresenter";

//TODO wrapper for other sub-components

function Game() {
    //const [gameStarted, setGameStarted] = useState(false);
    const [roundOver, setRoundOver] = useState(false);

    function roundOverACB() {
        setRoundOver(true);
    }

    // Determines how the time is displayed. View issue? But dependent on react things
    const renderer = ({ minutes, seconds }) => (
        <span>
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
    );

    if(!roundOver) return (
            <React.Suspense fallback={<Loading/>}>
                <Countdown date={Date.now() + roundLength * 1000} onComplete={roundOverACB}
                       precision={3} daysInHours={true} renderer={renderer}/>
                <WordInput/>
            </React.Suspense>
    )
    return (
        <div>
            <React.Suspense fallback={<Loading/>}>
                <ScoreBoard/>
            </React.Suspense>
        </div>
    )
}
export default Game;