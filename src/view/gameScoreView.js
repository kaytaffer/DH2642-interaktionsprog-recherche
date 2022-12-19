
function GameScoreView(props){

    function navigateToStartACB() {
        props.navigateToStart()
    }

    function navigateToHighScoreACB() {
        props.navigateToHighScore();
    }

    return (
        <div>
            <h1>Game Score</h1>

            <div className="containerForAllStats">
                <div className="statContainer">
                    <h4>total score:</h4>
                    <div className="innerStatContainer">
                        <h1 className="totalScore">{props.totalScore.toFixed(0)}</h1>
                    </div>
                </div>

                <div className="statContainer">
                    <h4>best word:</h4>
                    <div className="innerStatContainer">
                        <h1 className="bestWord">{props.highestScoringSynonym.word}</h1>
                        <span className="points number"> {props.totalScore.toFixed(0)} points</span>
                    </div>
                </div>
            </div>

            <div className="buttonContainer">
                <button className="button" onClick={navigateToStartACB}>Back to start!</button>
                <button className="button" onClick={navigateToHighScoreACB}>To High Scores!</button>
            </div>
        </div>
    );
}
export default GameScoreView;