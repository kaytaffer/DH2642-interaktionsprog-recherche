
function WordInputView(props){


    function textInputChangeACB(event){
        props.onTextInputChange(event)
    }
    function sendButtonClickedACB(){
        props.onAddEnteredWord();
    }
    function keyGoesDownACB(event){
        if(event.key !== "Enter") {return}
        props.onAddEnteredWord();
    }
    function displayEnteredWordACB(word){
        return <tr key ={word}><td>{word}</td></tr>;
    }

    return (
        <span className="App">

            <h1>{props.randomWord}</h1>

            <input type = "text"
                   placeholder="Give us your best Recherché synonyms.."
                   id="wordInput"
                   style={{ width:"270px" }}
                   value = {props.inputText}
                   onChange={textInputChangeACB}
                   onKeyDown={keyGoesDownACB}/>
            <button onClick={sendButtonClickedACB}>Send</button>

            <table className="centered">
                <tbody>
                {props.enteredWords.map(displayEnteredWordACB)}
                </tbody>
            </table>



            </span>

    );
}
export default WordInputView;