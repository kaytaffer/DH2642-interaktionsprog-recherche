
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
    function endGameRoundACB(){
        props.endGameRound()
    }

    const gradientStyle = {background: "linear-gradient(90deg, #7165FA "
            + (100 * props.round / props.maxRound)
            + "%, rgba(217, 217, 217, 0) "
            + (100 * props.round / props.maxRound)
            + "%)"};
    /*
    * background: linear-gradient(90deg, #7165FA 70.67%, rgba(217, 217, 217, 0) 70.67%);
    * */

    return (
        <div id="wordInput">

            <div className="roundContainer">
                <span className="roundDescription">round {props.round} of {props.maxRound}</span>
                <div id="roundProgressBar" style={gradientStyle}/>
            </div>

            <div className="timeContainer">
                <span className="timeDescription">time left</span>
                <div className="time"> {props.children}</div>
            </div>

            <h1 className="givenWord">[{props.randomWord}]</h1>

            <p className="instruction">Write as many synonyms as you can.
                The rarer the synonym, the more points you get.</p>

            <div className="inputContainer">
                <input className="wordInput" type = "text"
                       placeholder="Give us your best synonyms..."
                       id="wordInput"
                       autoFocus={true}
                       autoComplete={"off"}
                       value = {props.inputText}
                       onChange={textInputChangeACB}
                       onKeyDown={keyGoesDownACB}/>
                <button className="button" onClick={sendButtonClickedACB}>Send</button>
            </div>
            <button className="button" onClick={endGameRoundACB}>End round</button>

            <ul className="wordList">
                {props.enteredWords.map(displayEnteredWordACB)}
            </ul>
        </div>
    );
}
export default WordInputView;