
function GameScoreView(props){

    function navigateToStartACB() {
        props.navigateToStart()
    }

    return (
        <div id="gameScore">
            <h1>Game Score</h1>
            <p>Total score: {props.totalScore.toFixed(0)}</p>
            <button className="button" onClick={navigateToStartACB}>Back to start!</button>
        </div>
    );
}
export default GameScoreView;