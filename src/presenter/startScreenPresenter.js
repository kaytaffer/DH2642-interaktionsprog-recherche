import React from "react";
import StartScreenView from "../view/startScreenView";
import {useNavigate} from "react-router-dom";
import {useRecoilRefresher_UNSTABLE, useSetRecoilState} from "recoil";
import {givenWordState,enteredWordsState,totalScoreState,gameRound} from "../model/atoms";

function StartScreen() {

    const navigate = useNavigate()
    const refreshGivenWord = useRecoilRefresher_UNSTABLE(givenWordState);
    const setEnteredWords = useSetRecoilState(enteredWordsState);
    const setTotalScore = useSetRecoilState(totalScoreState);
    const setCurrentGameRound = useSetRecoilState(gameRound);


    //Navigates to game and refreshes the necessary states.
    function startNewGameACB(){
        refreshGivenWord();
        setEnteredWords([]);
        setTotalScore([0]);
        setCurrentGameRound(1);

        navigate("/game");


    }
    return (
        <StartScreenView onGameStart = {startNewGameACB}/>
    )
}
export default StartScreen;
