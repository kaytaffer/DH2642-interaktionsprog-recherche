import React from "react";
import StartScreenView from "../view/startScreenView";
import {useNavigate,Link} from "react-router-dom";
import {useRecoilRefresher_UNSTABLE, useSetRecoilState} from "recoil";
import {highestScoringSynonymState,givenWordState,enteredWordsState,scoresPerRoundState,gameRound} from "../model/atoms";

function StartScreen() {
    const navigate = useNavigate()
    const setHighestScoringSynonym = useSetRecoilState(highestScoringSynonymState);

    //Navigates to game and refreshes the necessary states.
    function startNewGameACB(){
        setHighestScoringSynonym([{word: "none", points: 0}]);
        navigate("/game");
    }
    return (
        <StartScreenView onGameStart = {startNewGameACB}
                        Link={Link}/>
    )
}
export default StartScreen;
