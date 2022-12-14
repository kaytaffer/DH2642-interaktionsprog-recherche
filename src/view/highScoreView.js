function highScoreView(props){

    function renderHighScoreTableRowCB(highScoreObject, index) {
        return <tr key={index}>
            <td>{index + 1}.</td>
            <td>{highScoreObject.name}</td>
            <td>{highScoreObject.score}</td>
        </tr>
    }

    return (
        <div>
            <h1>High Scores</h1>
            <table>
                <tbody>
                    {props.highScores.sort((a,b) => b.score - a.score).map(renderHighScoreTableRowCB)}
                </tbody>
            </table>
        </div>
    );
}
export default highScoreView;