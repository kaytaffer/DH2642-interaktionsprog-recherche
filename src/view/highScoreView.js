function highScoreView(props){

    function renderHighScoreTableRowCB(highScoreObject, index) {
        return <tr key={index}>
            <td>{index + 1}.</td>
            <td>{highScoreObject.name}</td>
            <td>{highScoreObject.score}</td>
        </tr>
    }

    /*.sort((a,b) => b.score - a.score).*/
    return (
        <div id="highScores">
            <h1>High Scores</h1>
            <table>
                <tbody>
                    {props.highScores.map(renderHighScoreTableRowCB)}
                </tbody>
            </table>
            <button onClick={props.addHighScore}>click</button>
        </div>
    );
}
export default highScoreView;