
function GameScoreView(props){

    function navigateToStartACB() {
        props.navigateToStart()
    }

    return (
        <div id="gameScore">
            <h1>Game Score</h1>
            <p>Total score: <span className="number">{props.totalScore.toFixed(0)}</span></p>
            <p>Highest-scoring synonym: <span className="number">{props.highestScoringSynonym.word} {props.highestScoringSynonym.points.toFixed(0)} points</span></p>
            <button className="button" onClick={navigateToStartACB}>Back to start!</button>
        </div>
    );
}
export default GameScoreView;