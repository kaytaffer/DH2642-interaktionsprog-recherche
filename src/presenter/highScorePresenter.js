import React from "react";
import HighScoreView from "../view/highScoreView";

function HighScore() {
    const highScore = {
        highScoreNames: ['dogge', 'test'],
        highScores: [-1, 3]
    }

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