import React from "react";
import WordInput from "./wordInputPresenter";
import ScoreBoard from "./scoreBoardPresenter"

//TODO wrapper for other sub-components

function Game() {
    return (
        <div>
            <WordInput/>
            <ScoreBoard/>
        </div>
    )
}
export default Game;