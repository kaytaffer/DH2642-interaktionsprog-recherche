//TODO build a view for the score board
function ScoreBoardView(props){

    function tableRowCB(synonymObject) {
        return (
            <tr key={synonymObject.word}>
                <td>{synonymObject.word}</td>
                <td>{synonymObject.points}</td>
            </tr>
            )
    }

    function definitionCB(definition) {
        return <li>"{definition}"</li>
    }

    return (
        <div className="scoreBoard">
            <h1>[{props.word}]</h1>
            <ol className="definition">
                {props.definition.map(definitionCB)}
            </ol>
            <table className="centered">
                <tbody>
                    {props.userWords.map(tableRowCB)}
                </tbody>
            </table>
        </div>
    );
}
export default ScoreBoardView;