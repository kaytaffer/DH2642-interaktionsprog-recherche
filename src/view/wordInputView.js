
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
        return <li key={word}>{word}</li>;
    }

    return (
        <div id="wordInput">

            <h1 className="givenWord">[{props.randomWord}]</h1>

            <p className="instruction">Write as many synonyms as you can.
                The rarer the synonym, the more points you get.</p>

            <input className="wordInput" type = "text"
                   placeholder="Give us your best synonyms..."
                   id="wordInput"
                   autoFocus={true}
                   autoComplete={"off"}
                   style={{ width:"270px" }}
                   value = {props.inputText}
                   onChange={textInputChangeACB}
                   onKeyDown={keyGoesDownACB}/>
            <button className="button" onClick={sendButtonClickedACB}>Send</button>

            <ul className="wordList">
                {props.enteredWords.map(displayEnteredWordACB)}
            </ul>
        </div>
    );
}
export default WordInputView;