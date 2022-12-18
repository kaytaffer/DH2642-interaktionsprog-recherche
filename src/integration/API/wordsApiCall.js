import {wordnik_BASE_URL_WORDS,wordnik_BASE_URL_WORD, wordnik_API_KEY } from "./apiConfig.js"

async function treatResponseACB(response){
    if (response.ok){
        return await response.json()
    }
    else throw new Error("@ api-call, server returned: " + response.status);
}

function treatErrorACB(error){
    console.log(error.message);
}
const apiParam ={
    /**
     * TODO: Fix GET method, and add headers
     * Did not find any documentation about this
     * at https://developer.wordnik.com/docs
     */
    "method": "GET",  // HTTP method
    "headers" : {
            // HTTP headers, also object literal
    }
}

function apiCall(URL){
    return fetch(URL,apiParam).then(treatResponseACB).catch(treatErrorACB);
}

/**
 * DOC getRandom: 
 * https://developer.wordnik.com/docs#!/words/getRandomWord
 * (1) ExcludePartOfSpeech, vilka ordklasser som ska exkluderas
 * (2) minCorpusCount bigger value = more common words
 * (*) -1 values are ignored. Can be removed but kept them if
 *     we want to easily change their values.
 */

function getRandomWord(){
    
    //console.log("getRandomWord was called");
    return apiCall(wordnik_BASE_URL_WORDS + "randomWord?"+
        "hasDictionaryDef=true" +
        "&excludePartOfSpeech=family-name%2C%20given-name%2Carticle&"+ // (1)
        "minCorpusCount=25000" +                                       // (2)
        "&maxCorpusCount=-1" +                                         // (*)                             
        "&minDictionaryCount=1"+    
        "&maxDictionaryCount=-1" +                                     // (*)
        "&minLength=5" +
        "&maxLength=-1" +                                              // (*)
        "&api_key=" + wordnik_API_KEY);
}

/**
 * DOC getFrequency:
 * https://developer.wordnik.com/docs#!/word/getWordFrequency
 * Returns word usage between *startYear* and *endYear*.
 * We are intersted in the totalCount.
 * 
 */
function getFrequency(word){
    let startYear = "2000";
    let endYear = "2022";
    return apiCall(wordnik_BASE_URL_WORD + word + "/frequency?" +
        "useCanonical=false"+           //maybe set to true
        "&startYear=" + startYear + 
        "&endYear="+    endYear+
        "&api_key=" + wordnik_API_KEY);
}
/**
 * DOC getDefinitions: 
 * https://developer.wordnik.com/docs#!/word/getDefinitions
 * (1) how many definitions to return.
 * Returns multible object where we are intersted in the "text"
 * attribute.
 */
function getDefinitions(word){
    //console.log("getDefinition was called")
        return apiCall(wordnik_BASE_URL_WORD + word + "/definitions?" +
            "limit=5" +                                                // (1)
            "&includeRelated=false" +
            "&useCanonical=false" +
            "&includeTags=false" +
            "&api_key=" + wordnik_API_KEY);
}
/**
 * DOC getSynonyms:
 * https://developer.wordnik.com/docs#!/word/getRelatedWords
 * (1) how many synonyms to return.
 * Return one object where all the synonyms is in an array called "words".
 */
function getSynonyms(word){
    //console.log("getSynonyms was called")
    return apiCall(wordnik_BASE_URL_WORD + word + "/relatedWords?" +
    "useCanonical=false" +              //maybe set to true
    "&relationshipTypes=synonym" + 
    "&limitPerRelationshipType=1000" +    // (1)
    "&api_key=" + wordnik_API_KEY);
}

export {getRandomWord, getFrequency, getDefinitions, getSynonyms}

