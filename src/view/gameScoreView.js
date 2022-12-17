
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
            <p>Total score: <span className="number">{props.totalScore.toFixed(0)}</span></p>
            <p>Highest-scoring synonym: <span className="number">{props.highestScoringSynonym.word} {props.highestScoringSynonym.points.toFixed(0)} points</span></p>
            <span><button className="button" onClick={navigateToStartACB}>Back to start!</button>
                <button className="button" onClick={navigateToHighScoreACB}>To High Scores!</button></span>
        </div>
    );
}
export default GameScoreView;