//TODO build a view for the score board
function ScoreBoardView(props){

    function tableRowCB(synonymObject) {
        return (
            <tr key={synonymObject.synonym}>
                <td>{synonymObject.synonym}</td>
                <td>{synonymObject.points}</td>
            </tr>
            )
    }

    return (
        <div className="scoreBoard">
            <h1>[{props.word}]</h1>
            <p>“{props.definition}”</p>
            <table className="centered">
                <tbody>
                    {props.userWords.map(tableRowCB)}
                </tbody>
            </table>
        </div>
    );
}
export default ScoreBoardView;