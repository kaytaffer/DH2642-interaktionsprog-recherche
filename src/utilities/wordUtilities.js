//TODO add more

// Utility methods concerning processing words

//DATA EXTRACTION functions from API-calls

import {calculateScoreFromFrequency} from "./gameUtilities";
import {getDefinitions, getSynonyms} from '../integration/API/wordsApiCall';

//picks out the word string for the given word object.
function extractGivenWord(givenWordObject){
    return givenWordObject.word;
}

//picks out the definition for the given word.
function extractDefinition(givenWordDefinitionObject){
    function combineDefinitionCB(currentArray, newResult){
        if(!newResult.text)
            return currentArray;
        return [...currentArray, newResult.text];
    }
    return givenWordDefinitionObject.reduce(combineDefinitionCB, []);
}

/**
 * TODO: Change this function to work with new API.
 * API call will return ONE array
 * No need to combine many array.
 * Just call API fetch
 */
function extractSynonyms(givenWordSynonymObject){
    return givenWordSynonymObject[0].words;
}

//picks out the number of times the word is likely to appear in any English corpus, per million words.
// If it does not have a frequency according to the API, returns a default value.
function extractFrequency (wordFrequencyObject){
    if(!wordFrequencyObject){
        return 50;
    }  //TODO is 50 reasonable?
    return wordFrequencyObject.totalCount;
}

//DATA PROCESSING functions below:

//creates an array of the words the user entered which are synonyms to the given word.
function compareWordsMatch(enteredWordsArray, givenWordSynonyms){
    function removeNonSynonymsCB(word) {
        function isWordCB(synonym) {
            return word === synonym;
        }
        return givenWordSynonyms.find(isWordCB);

    }
    
    return enteredWordsArray.filter(removeNonSynonymsCB);
}

//creates an array of the words the user entered which are NOT synonyms to the given word.
function compareWordsMismatch(enteredWordsArray, givenWordSynonyms){
    function removeSynonymsCB(word){
        function isWord(synonym) {
            return word !== synonym;
        }
        return !(givenWordSynonyms.find(isWord));
    }
    return enteredWordsArray.filter(removeSynonymsCB);
    
}

//creates an object of each word with points according to its frequency.
function createSynonymScoreObject (synonym, frequency) {

    return {word: synonym,
            points: calculateScoreFromFrequency(frequency)};
}


//EXPORTS
export {extractGivenWord, extractDefinition, extractSynonyms, extractFrequency,
    createSynonymScoreObject, compareWordsMatch, compareWordsMismatch}