import React, {useState} from "react";
import WordInput from "./wordInputPresenter";
import ScoreBoard from "./scoreBoardPresenter";
import {roundLength} from "../utilities/gameUtilities";
import Countdown, {zeroPad} from "react-countdown";
import Loading from "./loadingPresenter";
import {gameRound} from "../model/atoms";
import {useRecoilState, useSetRecoilState} from "recoil";
import {enteredWordsState} from "../model/atoms";


//TODO wrapper for other sub-components

function Game() {

    const [currentGameRound, setCurrentGameRound] = useRecoilState(gameRound);
    const [roundOver, setRoundOver] = useState(false);
    const setEnteredWords = useSetRecoilState(enteredWordsState);


    //Increases the game round (and therefore triggers a new given word) when player press the
    //"Next word" button in scoreBoardView and deletes entered words from previous round.
    function nextRoundACB(){
        setCurrentGameRound(currentGameRound + 1);
        setEnteredWords([]);
        setRoundOver(false);
    }

    //sets roundOver to true when the time is out.
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
        <div id="game">
            <React.Suspense fallback={<Loading/>}>
                <WordInput>
                    <Countdown date={Date.now() + roundLength * 1000} onComplete={roundOverACB}
                               precision={3} daysInHours={true} renderer={renderer}/>
                </WordInput>
            </React.Suspense>
        </div>
    )
    return (
        <div id="game">
            <React.Suspense fallback={<Loading/>}>
                <ScoreBoard onRoundOver = {nextRoundACB}/>
            </React.Suspense>
        </div>
    )
}
export default Game;
