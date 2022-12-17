import React, {useEffect} from "react";
import HighScoreView from "../view/highScoreView";
import {useRecoilState, useRecoilValue} from "recoil";
import {highScoreState} from "../model/persistenceAtoms";

function HighScore() {
    const [highScore, setHighScore] = useRecoilState(highScoreState)

    console.log(highScore);

    function test(){
        setHighScore([...highScore, {name:'setfrompresenter', score:4}])
    }

    return (
        <HighScoreView addHighScore={test} highScores={highScore}/>
    )
}
export default HighScore;