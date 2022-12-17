
function GameScoreView(props){

    function navigateToStartACB() {
        props.navigateToStart()
    }

    return (
        <div>
            <h1>Game Score</h1>
            <p>Total score: <span className="number">{props.totalScore.toFixed(0)}</span></p>
            <button className="button" onClick={navigateToStartACB}>Back to start!</button>
        </div>
    );
}
export default GameScoreView;