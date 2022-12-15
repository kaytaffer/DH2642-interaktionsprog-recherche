import React, {useEffect} from "react";
import HighScoreView from "../view/highScoreView";
import {useRecoilValue} from "recoil";
import {highScoreState} from "../model/persistenceAtoms";

function HighScore() {
    const highScore = useRecoilValue(highScoreState)

    function combinedHighScores(){
        function combineCB(element, index) {
            return {name: element, score: highScore.highScores[index]}
        }
        return highScore.highScoreNames.map(combineCB);
    }

    return (
        <div>
            <HighScoreView highScores={combinedHighScores()}/>
        </div>
    )
}
export default HighScore;