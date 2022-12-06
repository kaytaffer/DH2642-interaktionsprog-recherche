import {BASE_URL, API_KEY} from "/src/integration/API/apiConfig.js"

function treatHTTPResponseACB(response){
    if (response.status !== 200)
        throw Error("Something horrible happened @ api-call, server returned: " + response.status)
    else return response.json()
}

function transformResultACB(data){
    return data.results;
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
    return fetch(URL,apiParam).then(treatHTTPResponseACB).then(transformResultACB);
}

function getRandomWord(){
    return apiCall(BASE_URL + "/words/?random=true")
}

function getFrequency(word){
    return apiCall(BASE_URL +"/words/" + word + "/frequency")
}

export {getRandomWord, getFrequency}
