import WordInputView from "../view/wordInputView.js";
import React from "react";

function Game(props){

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
export default Game;