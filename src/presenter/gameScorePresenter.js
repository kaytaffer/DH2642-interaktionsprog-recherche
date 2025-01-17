import React, {useState} from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState, bestSynonymThisGameState, userDisplayNameState, userIdState} from "../model/atoms";
import {useRecoilState, useRecoilValue} from "recoil";
import HighScoreInputView from "../view/highScoreInputView";
import {highScoreState, usersBestGameState} from "../model/persistenceAtoms";
import {addNewHighScore, isHighScore} from "../utilities/gameUtilities";

function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);
    const [highScore, setHighScore] = useRecoilState(highScoreState);
    const highestScoringSynonym = useRecoilValue(bestSynonymThisGameState);
    const [notEnteredName, setNotEnteredName] = useState(true);
    const displayName = useRecoilValue(userDisplayNameState);
    const [newHighScorer, setNewHighScorer] = useState(displayName) || '';
    const userId = useRecoilValue(userIdState);
    const [bestUserScore, setBestUserScore] = useRecoilState(usersBestGameState(userId));

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    //Navigates to high score page
    function navigateToHighScoreACB(){
        navigate("/highscore")
    }

    //triggers re-rendering of input text
    const handleHighScorerTextChangeACB = (name) => {
        setNewHighScorer(name);
    };

    //Adds a new high score holder to the leaderboard.
    function addHighScorerACB(){
        setHighScore(addNewHighScore(highScore, newHighScorer, score.toFixed(0)));
        setNotEnteredName(false);
    }

    function componentWasCreatedACB() {
        if(userId && (!bestUserScore || parseInt(bestUserScore.score) < parseInt(score))) {
            setBestUserScore({score, date: Date.now()})
        }
    }
    React.useEffect( componentWasCreatedACB, [] );

    return (<div id="gameScore">
            <GameScoreView
                navigateToStart = {navigateToStartACB}
                navigateToHighScore = {navigateToHighScoreACB}
                totalScore = {score}
                highestScoringSynonym = {highestScoringSynonym}
                nameSavedToHighScore = {!notEnteredName}
            />
            {isHighScore(score.toFixed(0), highScore)  && <HighScoreInputView
                nameInputValue = {newHighScorer || ''}
                onAddEnteredName = {addHighScorerACB}
                onTextInputChange = {handleHighScorerTextChangeACB}
                onEnteredName = {!notEnteredName}
            />}
        </div>
    )
}
export default GameScore;