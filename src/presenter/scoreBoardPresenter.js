//TODO present component scoreBoard
import React from "react";

import ScoreBoardView from "../view/scoreBoardView.js";
import {useRecoilValue} from "recoil";
import {definitionState, enteredWordsWithFrequencyState, givenWordState} from "../model/atoms.js";

function ScoreBoard() {
    const givenWord = useRecoilValue(givenWordState);
    const definition = useRecoilValue(definitionState);
    const userWords = useRecoilValue(enteredWordsWithFrequencyState);

    //to test:
    console.log("given word: " + givenWord);
    console.log("definition: " + definition);
    console.log("user words:")
    console.log(userWords);

    return <ScoreBoardView word = {"word"}/>;
}
export default ScoreBoard;