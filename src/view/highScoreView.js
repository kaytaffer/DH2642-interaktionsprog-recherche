function highScoreView(props){

    function renderHighScoreTableRowCB(highScoreObject, index) {
        return <tr key={index}>
            <td className="highScorePosition">{index + 1}.</td>
            <td className="highScoreName">{highScoreObject.name}</td>
            <td className="highScoreScore">{highScoreObject.score}</td>
        </tr>
    }

    return (
        <div id="highScores">
            <h2>High Scores</h2>
            <table>
                <tbody>
                    {[...props.highScores].sort((a,b) => b.score - a.score).map(renderHighScoreTableRowCB)}
                </tbody>
            </table>
        </div>
    );
}
export default highScoreView;