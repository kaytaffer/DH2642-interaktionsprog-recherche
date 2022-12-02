import React from "react";

function WordInputView(props){

    function userInputButtonACB(){
        props.onSendButtonClick();
    }
    function getUserInputTextACB(event){
        props.onUserTextInput(event.target.value);
    }
    return (
        <span className="App">
            <h1>{props.randomWordOption[Math.floor(Math.random() * 6)]}</h1>
            <input placeholder="Give us your best Recherché synonyms.."
                   spellCheck={true}
                   style={{ width:"270px" }}
                   onChange={getUserInputTextACB}
                   id="wordInput"/>

            <button onClick={userInputButtonACB}>Send</button>
        </span>
    );
}
export default WordInputView;