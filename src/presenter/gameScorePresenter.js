import React, {useState} from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState} from "../model/atoms";
import {useRecoilState, useRecoilValue} from "recoil";
import HighScoreInputView from "../view/highScoreInputView";
import {highScoreState} from "../model/persistenceAtoms";
import {addNewHighScore, isHighScore} from "../utilities/gameUtilities";

function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);
    const [newHighScorer, setNewHighScorer] = useState('');
    const [highScore, setHighScore] = useRecoilState(highScoreState);

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    //Sums the total score for correct synonyms for all rounds.
    // TODO selector
    function sumCB(sumSoFar, point){
        return sumSoFar + point;
    }

    //triggers re-rendering of input text
    const handleHighScorerTextChangeACB = (event) => {
        setNewHighScorer(event.target.value);
    };

    //Adds a new high score holder to the leaderboard.
    function addHighScorerACB(){
        setHighScore(addNewHighScore(highScore, newHighScorer, score.reduce(sumCB,0).toFixed(0)));
        navigate("/highscore")
    }

    return (<div>
            <GameScoreView
                navigateToStart ={navigateToStartACB}
                totalScore = {score.reduce(sumCB,0)}
            />
            {isHighScore(score.reduce(sumCB,0).toFixed(0), highScore) && <HighScoreInputView
                onAddEnteredName = {addHighScorerACB}
                onTextInputChange = {handleHighScorerTextChangeACB}
            />}
        </div>
    )
}
export default GameScore;
