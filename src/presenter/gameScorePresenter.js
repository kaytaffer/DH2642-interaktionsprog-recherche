import React, {useState} from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState, bestSynonymThisGameState, userDisplayNameState} from "../model/atoms";
import {useRecoilState, useRecoilValue} from "recoil";
import HighScoreInputView from "../view/highScoreInputView";
import {highScoreState} from "../model/persistenceAtoms";
import {addNewHighScore, isHighScore} from "../utilities/gameUtilities";

function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);
    const [newHighScorer, setNewHighScorer] = useState('');
    const [highScore, setHighScore] = useRecoilState(highScoreState);
    const highestScoringSynonym = useRecoilValue(bestSynonymThisGameState);
    const [notEnteredName, setNotEnteredName] = useState(true);
    const displayName = useRecoilValue(userDisplayNameState);

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    //Navigates to high score page
    function navigateToHighScoreACB(){
        navigate("/highscore")
    }

    //triggers re-rendering of input text
    const handleHighScorerTextChangeACB = (event) => {
        setNewHighScorer(event.target.value);
    };

    //Adds a new high score holder to the leaderboard.
    function addHighScorerACB(){
        setHighScore(addNewHighScore(highScore, newHighScorer, score.toFixed(0)));
        setNotEnteredName(false);
    }

    return (<div id="gameScore">
            <GameScoreView
                navigateToStart = {navigateToStartACB}
                navigateToHighScore = {navigateToHighScoreACB}
                totalScore = {score}
                highestScoringSynonym = {highestScoringSynonym}
            />
            {isHighScore(score.toFixed(0), highScore) && notEnteredName &&<HighScoreInputView
                displayName = {displayName}
                onAddEnteredName = {addHighScorerACB}
                onTextInputChange = {handleHighScorerTextChangeACB}
            />}
        </div>
    )
}
export default GameScore;