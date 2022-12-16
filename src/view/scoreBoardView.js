//TODO build a view for the score board
function ScoreBoardView(props){

    function showCorrectSynonymsCB(synonymObject) {
        return (
            <tr key={synonymObject.word}>
                <td>{synonymObject.word}</td>
                <td><span className="number">{synonymObject.points.toFixed(0)}</span></td>
            </tr>
            )
    }
    function showIncorrectSynonymsCB(incorrectSynonym){
        return(
            <tr key ={incorrectSynonym}>
                <td>
                    <span className="strikethrough">{incorrectSynonym}</span>
                </td>
            </tr>
        )
    }

    function definitionCB(definition) {
        return <li key={definition}>"{definition}"</li>
    }

    // Displays all synonyms (for the given word) retrieved from the API.
    function showSynonymsForGivenWordCB(synonym){
        return (
                <li key ={synonym}>
                    {synonym}
                </li>
        )
    }
    function navigateToNextWordACB(){
        props.navigateToNextWord()
    }
    function navigateToStartACB(){
        props.navigateToStart()
    }
    function navigateToGameScoreACB(){
        props.navigateToGameScore()
    }

    return (
        <div id="scoreBoard">
            <h1 className="givenWord">[{props.word}]</h1>

            <b>Your synonyms:</b>
            <table className="userSynonyms">
                <tbody>
                    {props.userWords.map(showCorrectSynonymsCB)}
                    {props.incorrectUserWords.map(showIncorrectSynonymsCB)}
                </tbody>
            </table>
            <p>
                Score this round: <span className="number">{props.scoreThisRound.toFixed(0)}</span>
            </p>
            <p>
                Total score: <span className="number">{props.totalScore.toFixed(0)}</span>
            </p>

            <button className="button" onClick={navigateToNextWordACB} hidden={props.lastRound}>Next word</button>
            <button className="button" onClick={navigateToStartACB} hidden = {!props.lastRound}>Back to start!</button>
            <button className="button" onClick={navigateToGameScoreACB} hidden = {!props.lastRound}>Game Score</button>

            <h3>Definitions:</h3>
            <ol className="definitions">
                {props.definition.map(definitionCB)}
            </ol>

            <h3>Example synonyms:</h3>
            <ul className="wordList">
                {props.givenWordSynonyms.map(showSynonymsForGivenWordCB)}
            </ul>

        </div>
    );
}
export default ScoreBoardView;