//TODO add all utils concerning processing words



//TODO
import {synonymsState} from "../model/atoms";
import {calculatePointsFromFrequency} from "./gameUtilities";

function extractGivenWord(givenWordObject){
    return "example";
}

//TODO
function extractDefinition(givenWordObject){
    return "a thing characteristic of its kind or illustrating a general rule."
}

//TODO
function extractSynonyms(givenWordObject){
    return ["instance", "case", "illustration", "sample"];
}

//TODO
export function compareWordsMatch(userSynonymArray, givenWordSynonyms){
    function isASynonymCB(word) {
        function isWord(synonym) {
            return word === synonym;
        }
        return givenWordSynonyms.find(isWord);
    }
    return userSynonymArray.filter(isASynonymCB);
}

//TODO
function compareWordsMismatch(userSynonymArray, givenWordSynonyms){

    return [];
}

//TODO
export function createSynonymPointObject (synonym, frequency) {

    return {synonym,
            points: calculatePointsFromFrequency(frequency)};
}

