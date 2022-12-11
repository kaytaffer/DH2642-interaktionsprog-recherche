//TODO present component scoreBoard
import React from "react";

import ScoreBoardView from "../view/scoreBoardView.js";
import {useRecoilValue} from "recoil";
import {definitionState, enteredWordsWithFrequencyState, givenWordState, incorrectWordsState,synonymsState} from "../model/atoms.js";

function ScoreBoard() {
    const givenWord = useRecoilValue(givenWordState);
    const definition = useRecoilValue(definitionState);
    const userWords = useRecoilValue(enteredWordsWithFrequencyState);
    const incorrectUserWords = useRecoilValue(incorrectWordsState);
    const givenWordSynonyms = useRecoilValue(synonymsState);

    return <ScoreBoardView word = {givenWord}
                           definition = {definition}
                           userWords = {userWords}
                           incorrectUserWords = {incorrectUserWords}
                           givenWordSynonyms = {givenWordSynonyms}/>;
}
export default ScoreBoard;