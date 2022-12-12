//TODO build a view for the score board
function ScoreBoardView(props){

    function showCorrectSynonymsCB(synonymObject) {
        return (
            <tr key={synonymObject.word}>
                <td>{synonymObject.word}</td>
                <td>{synonymObject.points.toFixed(2)}</td>
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
                <tr key ={synonym} >
                    <td>
                        <i>{synonym}</i>
                    </td>
                </tr>

        )
    }

    return (
        <div className="scoreBoard">
            <h1>[{props.word}]</h1>

            <ol className="definition">
                <i><b>Definition: </b></i>
                {props.definition.map(definitionCB)}
            </ol>

            <b>Synonyms:</b>
            <table className="centered">
                <tbody>
                        {props.givenWordSynonyms.map(showSynonymsForGivenWordCB)}
                </tbody>
            </table>


            <table className="centered">
                <tbody>
                    {props.userWords.map(showCorrectSynonymsCB)}
                    {props.incorrectUserWords.map(showIncorrectSynonymsCB)}
                </tbody>
            </table>
        </div>
    );
}
export default ScoreBoardView;