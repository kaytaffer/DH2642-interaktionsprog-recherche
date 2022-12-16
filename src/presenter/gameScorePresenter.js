import React from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState} from "../model/atoms";
import {useRecoilValue} from "recoil";



function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    //Sums the total score for correct synonyms for all rounds.
    // TODO selector
    function sumCB(sumSoFar, point){
        return sumSoFar + point;
    }

    return (
            <GameScoreView
                navigateToStart ={navigateToStartACB}
                totalScore = {score.reduce(sumCB,0)}
            />
    )
}
export default GameScore;