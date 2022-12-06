//TODO present component wordInput

import React from "react";

//TODO present a third party clock/timer

import WordInputView from "../view/wordInputView.js";
import {useRecoilValue, useRecoilState} from "recoil";
import {enteredWordsState, givenWordState} from "../model/atoms.js";

function WordInput() {
    const givenWord = useRecoilValue(givenWordState);
    const [enteredWords, setEnteredWords] = useRecoilState(enteredWordsState);

    //to test:
    console.log("given word: " + givenWord);
    console.log("entered words: " + enteredWords);
    // to add a new word that user entered: setEnteredWords([...enteredWords, newWord]);

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