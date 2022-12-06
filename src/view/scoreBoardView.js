//TODO build a view for the score board
function ScoreBoardView(props){

    function tableRowCB(synonymObject) {
        return (
            <tr>
                <td>{synonymObject.synonym}</td>
                <td>{synonymObject.frequency}</td>
            </tr>
            )
    }

    return (
        <div className="scoreBoard">
            <h1>{props.word}</h1>
            <p>{props.definition}</p>
            <table className="centered">
                {props.userWords.map(tableRowCB)}
            </table>
        </div>
    );
}
export default ScoreBoardView;