// Utility methods concerning processing words

//DATA EXTRACTION functions from API-calls

import {calculateScoreFromFrequency} from "./gameUtilities";

function extractGivenWord(givenWordObject){
    return givenWordObject.word;
}

function extractDefinition(givenWordDefinitionObject){
    function combineDefinitionCB(currentArray, newResult){
        if(!newResult.text)
            return currentArray;
        return [...currentArray, newResult.text];
    }
    return givenWordDefinitionObject.reduce(combineDefinitionCB, []);
}

function extractSynonyms(givenWordSynonymObject){
    function removeDuplicates(arrayOfSynonyms) {
        return arrayOfSynonyms.filter((item, index) => arrayOfSynonyms.indexOf(item) === index);
    }
    return removeDuplicates(givenWordSynonymObject[0].words);
}

//returns the total word usage (higher number = more common)
function extractFrequency (wordFrequencyObject){
    if(!wordFrequencyObject || wordFrequencyObject.totalCount===0){
        return 666667;
    }
    return wordFrequencyObject.totalCount;
}

//DATA PROCESSING functions below:

//creates an array of the words the user entered which are synonyms to the given word.
function compareWordsMatch(enteredWordsArray, givenWordSynonyms){
    function removeNonSynonymsCB(word) {
        function isWordCB(synonym) {
            return word.toLowerCase() === synonym.toLowerCase();
        }
        return givenWordSynonyms.find(isWordCB);

    }
    
    return enteredWordsArray.filter(removeNonSynonymsCB);
}

//creates an array of the words the user entered which are NOT synonyms to the given word.
function compareWordsMismatch(enteredWordsArray, givenWordSynonyms){
    function removeSynonymsCB(word){
        function isWordCB(synonym) {
            return word.toLowerCase() === synonym.toLowerCase();
        }
        return !(givenWordSynonyms.find(isWordCB));
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