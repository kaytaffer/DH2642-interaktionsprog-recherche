//TODO add all utils concerning processing words

//DATA EXTRACTION functions from API-calls

import {calculateScoreFromFrequency} from "./gameUtilities";

//TODO Test if this is right? should be according to https://rapidapi.com/dpventures/api/wordsapi
//picks out the word string for the given word object.
function extractGivenWord(givenWordObject){
    return givenWordObject.word;
}

//TODO Test if this is right? should be according to https://rapidapi.com/dpventures/api/wordsapi
//picks out the definition for the given word.
function extractDefinition(givenWordObject){
    return givenWordObject.results[0].definition;
}

//TODO Test if this is right? should be according to https://rapidapi.com/dpventures/api/wordsapi
//picks out the synonym array for the given word.
function extractSynonyms(givenWordObject){
    return givenWordObject.results[0].synonyms;
}

//TODO Test if this is right? should be according to https://rapidapi.com/dpventures/api/wordsapi
//picks out the number of times the word is likely to appear in any English corpus, per million words.
// If it does not have a frequency according to the API, returns a default value.
function extractFrequency (wordFrequencyObject){
    if(!wordFrequencyObject) return 50; //TODO is 50 reasonable?
    return wordFrequencyObject.frequency.perMillion;
}

//DATA PROCESSING functions below:

//creates an array of the words the user entered which are synonyms to the given word.
function compareWordsMatch(enteredWordsArray, givenWordSynonyms){

    function isASynonymCB(word) {
        function isWord(synonym) {
            return word === synonym;
        }
        return givenWordSynonyms.find(isWord);
    }

    return [...enteredWordsArray].filter(isASynonymCB);
}

//creates an array of the words the user entered which are NOT synonyms to the given word.
function compareWordsMismatch(enteredWordsArray, givenWordSynonyms){
    function mismatchCheckerCB(word){
        return (word !== givenWordSynonyms.find(word));
    }
    return [...enteredWordsArray].filter(mismatchCheckerCB);
}

//creates an object of each word with points according to its frequency.
function createSynonymScoreObject (synonym, frequency) {

    return {word: synonym,
            points: calculateScoreFromFrequency(frequency)};
}


//EXPORTS
export {extractGivenWord, extractDefinition, extractSynonyms, extractFrequency,
    createSynonymScoreObject, compareWordsMatch, compareWordsMismatch}