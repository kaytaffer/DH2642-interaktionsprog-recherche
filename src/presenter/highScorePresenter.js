import React, {useEffect} from "react";
import HighScoreView from "../view/highScoreView";
import {useRecoilState, useRecoilValue} from "recoil";
import {highScoreState} from "../model/persistenceAtoms";

function HighScore() {
    const [highScore, setHighScore] = useRecoilState(highScoreState)

    // function combinedHighScores(){
    //     function combineCB(element, index) {
    //         return {name: element, score: highScore.highScores[index]}
    //     }
    //     return highScore.highScoreNames.map(combineCB);
    // }

    // set(ref(fireBDataB, '/highScore'), [{name:'dogge',score:-1}]);
    // get(ref(fireBDataB, '/highScore')).then(snapshot => {console.log(snapshot.val())})

    console.log(highScore);

    function test(){
        setHighScore([...highScore, {name:'setfrompresenter', score:4}])
    }

    return (
        <HighScoreView addHighScore={test} highScores={highScore}/>
    )
}
export default HighScore;