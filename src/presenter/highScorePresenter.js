import HighScoreView from "../view/highScoreView";
import {useRecoilState} from "recoil";
import {highScoreState} from "../model/persistenceAtoms";

function HighScore() {
    const [highScore, ] = useRecoilState(highScoreState)

    return (
        highScore && <HighScoreView highScores={highScore}/>
    )
}
export default HighScore;