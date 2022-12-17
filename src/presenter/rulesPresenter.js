import React from "react";
import RulesView from "../view/rulesView";
import {Link, useNavigate} from "react-router-dom";
import Accordion from "../presenter/accordionPresenter";
import {numberOfRounds} from "../utilities/gameUtilities";
import {useRecoilRefresher_UNSTABLE, useSetRecoilState} from "recoil";
import {enteredWordsState, gameRound, givenWordState, scoresPerRoundState} from "../model/atoms";

function Rules() {
    const navigate = useNavigate();
    const refreshGivenWord = useRecoilRefresher_UNSTABLE(givenWordState);
    const setTotalScore = useSetRecoilState(scoresPerRoundState);
    const setEnteredWords = useSetRecoilState(enteredWordsState);
    const setCurrentGameRound = useSetRecoilState(gameRound);

    return (
        <RulesView
            highScoreLink={<Link to='/highscore'>high score list</Link>}
            onClickPlay={() => {
                refreshGivenWord();
                setEnteredWords([]);
                setTotalScore([0]);
                setCurrentGameRound(1);
                navigate('/game');}}
            Accordion={Accordion}
            rounds={numberOfRounds}/>
    )
}
export default Rules;