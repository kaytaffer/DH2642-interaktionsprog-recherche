//TODO add more

// Utility methods concerning processing words

//DATA EXTRACTION functions from API-calls

import {calculateScoreFromFrequency} from "./gameUtilities";

//picks out the word string for the given word object.
function extractGivenWord(givenWordObject){
    return givenWordObject.word;
}

//picks out the definition for the given word.
function extractDefinition(givenWordObject){
    function combineDefinitionCB(currentArray, newResult){
        return [...currentArray, newResult.definition]
    }
    return givenWordObject.results.reduce(combineDefinitionCB, []);
}

//picks out the synonym array for the given word.
function extractSynonyms(givenWordObject){

    function combineArraysCB(currentArray, newResults) {
        function removeDuplicatesCB(element) {
            return !currentArray.find((word) => {return word === element}) // returns false if word is already in array
        }
        if(!newResults.synonyms) return currentArray;
        return [...currentArray, ...newResults.synonyms.filter(removeDuplicatesCB)];
    }
    
    return givenWordObject.results.reduce(combineArraysCB, []);
}

//picks out the number of times the word is likely to appear in any English corpus, per million words.
// If it does not have a frequency according to the API, returns a default value.
function extractFrequency (wordFrequencyObject){
    if(!wordFrequencyObject.frequency){
        return 50;
    }  //TODO is 50 reasonable?
    return wordFrequencyObject.frequency.perMillion;
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
        function isWordCB(synonym) {
            return word === synonym;
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