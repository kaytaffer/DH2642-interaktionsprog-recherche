//TODO present component scoreBoard
import React, {useState} from "react";

import ScoreBoardView from "../view/scoreBoardView.js";
import {useRecoilState, useRecoilValue} from "recoil";
import {
    definitionState,
    enteredWordsWithScoreState,
    givenWordState,
    incorrectWordsState,
    totalScoreState,
    synonymsState,
} from "../model/atoms.js";

function ScoreBoard(props) {
    const givenWord = useRecoilValue(givenWordState);
    const definition = useRecoilValue(definitionState);
    const userWords = useRecoilValue(enteredWordsWithScoreState);
    const incorrectUserWords = useRecoilValue(incorrectWordsState);
    const givenWordSynonyms = useRecoilValue(synonymsState);
    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [score, setScore] = useRecoilState(totalScoreState);

    //Sums the total score for correct synonyms for all rounds.
    function sumCB(sumSoFar, point){
        return sumSoFar + point;
    }
    //Sums the score for correct synonyms in the current round.
    function sumScoreCB(sumSoFar, newElement){
        return sumSoFar + newElement.points;
    }

    //Sums the points related to each synonym in the current round
    //and saves it in component and recoil states.
    function componentWasCreatedACB(){
        const roundScore = userWords.reduce(sumScoreCB, 0);
        setScoreThisRound(roundScore);
        setScore([...score, roundScore]);
    }

    React.useEffect( componentWasCreatedACB, [] );

    return <ScoreBoardView word = {givenWord}
                    definition = {definition}
                    userWords = {userWords}
                    incorrectUserWords = {incorrectUserWords}
                    givenWordSynonyms = {givenWordSynonyms}
                    scoreThisRound = {scoreThisRound}
                    totalScore = {score.reduce(sumCB,0)}
                    navigateToNextWord = {props.onRoundOver}/>;
}
export default ScoreBoard;
