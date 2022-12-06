
import React, {useState} from "react";
import WordInputView from "../view/wordInputView.js";
import {useRecoilValue, useRecoilState} from "recoil";
import {enteredWordsState, givenWordState} from "../model/atoms.js";

function WordInput() {
    const givenWord = useRecoilValue(givenWordState);
    const [enteredWords, setEnteredWords] = useRecoilState(enteredWordsState);
    const [newWord, setNewWord] = useState('');

    //Saves last text input from user in component state.
    const handleTextChangeACB = event =>{
        setNewWord(event.target.value);
    };

    //Saves entered word from users into array when keyboard key "Enter" or "Send" button is activated.
    const performAddWordACB = () => {
        setEnteredWords([...enteredWords, newWord]);

        //Clear the input box.
        setNewWord('');
    };


    return <div>
        <WordInputView  randomWord = {givenWord}
                        inputText = {newWord}
                        onAddEnteredWord ={performAddWordACB}
                        onTextInputChange = {handleTextChangeACB}
                        enteredWords = {enteredWords}/>
    </div>

}
export default WordInput;