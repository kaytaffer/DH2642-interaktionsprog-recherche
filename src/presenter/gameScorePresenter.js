import React, {useState} from "react";
import GameScoreView from "../view/gameScoreView";
import {useNavigate} from "react-router-dom";
import {totalScoreState} from "../model/atoms";
import {useRecoilState, useRecoilValue} from "recoil";
import HighScoreInputView from "../view/highScoreInputView";
import {highScoreState} from "../model/persistenceAtoms";
import {isHighScore} from "../utilities/gameUtilities";

function GameScore() {

    const navigate = useNavigate();
    const score = useRecoilValue(totalScoreState);
    const [, setNewHighscorer] = useState('');
    const [highScore, setHighScore] = useRecoilState(highScoreState)

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/");
    }

    //Navigates to high score page
    function navigateToHighScoreACB(){
        navigate("/highScore") //TODO maybe finish performAddHighScore with this
    }

    //Sums the total score for correct synonyms for all rounds.
    // TODO selector
    function sumCB(sumSoFar, point){
        return sumSoFar + point;
    }

    const handleHighScorerTextChangeACB = (event) => {
        setNewHighscorer(event.target.value);
    };

    const performAddHighScorerACB = () => {
        /*TODO
        if(!enteredWords.find(renderEnteredWordsCB))
            setEnteredWords([...enteredWords, newWord]);

        setNewWord('');     */
    };

    return (<div>
            <GameScoreView
                navigateToStart ={navigateToStartACB}
                totalScore = {score.reduce(sumCB,0)}
            />
            {isHighScore(score, highScore) && <HighScoreInputView
                onAddEnteredName = {performAddHighScorerACB}
                onTextInputChange = {handleHighScorerTextChangeACB}
            />}
        </div>
    )
}
export default GameScore;
