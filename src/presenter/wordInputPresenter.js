
import React, {useState} from "react";
import WordInputView from "../view/wordInputView.js";
import {useRecoilValue, useRecoilState} from "recoil";
import {enteredWordsState, gameRound, givenWordState} from "../model/atoms.js";
import {numberOfRounds} from "../utilities/gameUtilities";

function WordInput(props) {
    const givenWord = useRecoilValue(givenWordState);
    const [enteredWords, setEnteredWords] = useRecoilState(enteredWordsState);
    const [newWord, setNewWord] = useState('');
    const round = useRecoilValue(gameRound);

    //Saves last text input from user in component state.
    const handleTextChangeACB = (event) => {
        setNewWord(event.target.value);
    };
    // CB checks if a word is already represented in the array with saved word from current game.
    // Ensures that no duplicate words are saved.
    const renderEnteredWordsCB = (word) => {
        return word.toLowerCase() === newWord.toLowerCase();
    }
    //Saves unique entered word from users when keyboard key "Enter" or "Send" button is activated,
    //and then clear the input box.
    const performAddWordACB = () => {
        if(!enteredWords.find(renderEnteredWordsCB))
        setEnteredWords([...enteredWords, newWord]);
        
        setNewWord('');
    };


    return <WordInputView  randomWord = {givenWord}
                        inputText = {newWord}
                        onAddEnteredWord ={performAddWordACB}
                        onTextInputChange = {handleTextChangeACB}
                        enteredWords = {enteredWords}
                        round = {round}
                        maxRound = {numberOfRounds}
                        endGameRound = {props.endGameRound}>
                {props.children}
            </WordInputView>

}
export default WordInput;