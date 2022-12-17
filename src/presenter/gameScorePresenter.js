import React from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState,highestScoringSynonymState} from "../model/atoms";
import {useRecoilValue} from "recoil";



function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);
    const highestScoringSynonym = useRecoilValue(highestScoringSynonymState);

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    return (
            <GameScoreView
                navigateToStart ={navigateToStartACB}
                totalScore = {score}
                highestScoringSynonym = {highestScoringSynonym[0]}
            />
    )
}
export default GameScore;