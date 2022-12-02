//TODO present component wordInput

import React from "react";

//TODO present a third party clock/timer

import WordInputView from "../view/wordInputView.js";


function WordInput() {

    function addWordACB(text){
        console.log(text);
    }
    function performSendACB(){
        console.log("Send");
    }

    return <div>
        <WordInputView randomWordOption = {["example", "type", "span", "ability", "border", "membership", "resolve"]}
                       onUserTextInput = {addWordACB}
                       onSendButtonClick ={performSendACB}/>;
    </div>

}
export default WordInput;