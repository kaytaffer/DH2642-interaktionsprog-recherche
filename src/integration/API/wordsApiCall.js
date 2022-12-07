import {BASE_URL, API_KEY} from "./apiConfig.js"

function treatHTTPResponseACB(response){
    if (response.status !== 200)
        throw Error("Something horrible happened @ api-call, server returned: " + response.status)
    else return response.json()
}

const apiParam ={
    "method": "GET",  // HTTP method
    "headers": {      // HTTP headers, also object literal
        'X-Mashape-Key': API_KEY,
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        "x-ratelimit-requests-remaining": "2499",
    }
}

function apiCall(URL){
    return fetch(URL,apiParam).then(treatHTTPResponseACB);
    
}

function getRandomWord(){
    return apiCall(BASE_URL + "/words/?hasDetails=synonyms,definition&random=true")
}

function getFrequency(word){
    return apiCall(BASE_URL +"/words/" + word + "/frequency")
}

//only for testing
function getSearchedWord(word){
    return apiCall(BASE_URL + "/words/" + word)
}

export {getRandomWord, getFrequency, getSearchedWord}
