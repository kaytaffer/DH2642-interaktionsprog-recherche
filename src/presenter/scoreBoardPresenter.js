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
    synonymsState, gameRound,
} from "../model/atoms.js";

function ScoreBoard(props) {
    const givenWord = useRecoilValue(givenWordState);
    const definition = useRecoilValue(definitionState);
    const userWords = useRecoilValue(enteredWordsWithScoreState);
    const incorrectUserWords = useRecoilValue(incorrectWordsState);
    const givenWordSynonyms = useRecoilValue(synonymsState);
    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [score, setScore] = useRecoilState(totalScoreState);
    const currentGameRound = useRecoilValue(gameRound);
    const navigate = useNavigate()
    const arrayOfExampleSynonyms = getMultipleRandom(givenWordSynonyms);

    function getMultipleRandom(newArray) {
        const shuffled = [...newArray].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, 4);
      }


    //Sums the total score for correct synonyms for all rounds.
    // TODO selector
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

    //Navigates to a page that shows values from the completed game round
    function navigateToGameScoreACB(){
        navigate("/gamescore")
    }

    //Navigates to start page
    function navigateToStartACB(){
        navigate("/")
    }

    React.useEffect( componentWasCreatedACB, [] );

    return <ScoreBoardView word = {givenWord}
                    definition = {definition}
                    userWords = {userWords}
                    incorrectUserWords = {incorrectUserWords}
                    givenWordSynonyms = {arrayOfExampleSynonyms}
                    scoreThisRound = {scoreThisRound}
                    totalScore = {score.reduce(sumCB,0)}
                    navigateToNextWord = {props.onRoundOver}
                    navigateToStart ={navigateToStartACB}
                    navigateToGameScore = {navigateToGameScoreACB}
                    lastRound = {currentGameRound > 4}/>;
}
export default ScoreBoard;
