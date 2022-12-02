//TODO not dishSource.js

function treatHTTPResponseACB(response){
    if (response.status !== 200)
        throw Error("Something horrible happened @ api-call, server returned: " + response.status)
    else return response.json()
}

//format of the call, wanted by the API
const apiParam ={  // "method": "GET",              // HTTP method
    //"headers": {                  // HTTP headers, also object literal
  //      'X-Mashape-Key': API_KEY,
  //      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    } // end of headers object
}/* end of second fetch parameter, object */

function apiCall(URL){
    return fetch(URL,apiParam).then(treatHTTPResponseACB);
}

function getRandomWord(){
    return apiCall(BASE_URL +//TODO )
}

function getFrequency(word){
    return apiCall(BASE_URL +//TODO )
}

