//TODO present component scoreBoard
import React, {useState} from "react";

import {useNavigate} from "react-router-dom";
import ScoreBoardView from "../view/scoreBoardView.js";
import {useRecoilState, useRecoilValue} from "recoil";
import {
    definitionState,
    enteredWordsWithScoreState,
    givenWordState,
    incorrectWordsState,
    totalScoreState,
    synonymsState
} from "../model/atoms.js";

function ScoreBoard() {
    const givenWord = useRecoilValue(givenWordState);
    const definition = useRecoilValue(definitionState);
    const userWords = useRecoilValue(enteredWordsWithScoreState);
    const incorrectUserWords = useRecoilValue(incorrectWordsState);
    const givenWordSynonyms = useRecoilValue(synonymsState);
    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [score, setScore] = useRecoilState(totalScoreState);
    const navigate = useNavigate();

    function sumScoreCB(sumSoFar, newElement){
        return sumSoFar + newElement.points;
    }
    function componentWasCreatedACB(){
        setScoreThisRound(userWords.reduce(sumScoreCB, 0));
        setScore(userWords.reduce(sumScoreCB, score));
    }
    function navigateToStartCB(){
            navigate("/");
    }
    React.useEffect( componentWasCreatedACB, [] );

    return <ScoreBoardView word = {givenWord}
                    definition = {definition}
                    userWords = {userWords}
                    incorrectUserWords = {incorrectUserWords}
                    givenWordSynonyms = {givenWordSynonyms}
                    scoreThisRound = {scoreThisRound}
                    totalScore = {score}
                    onButtonClick = {navigateToStartCB}/>;
}
export default ScoreBoard;