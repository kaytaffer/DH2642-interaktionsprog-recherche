//TODO add more

// Utility methods concerning game logic here:

export const roundLength = 10;
const maxHighScoreHolders = 10;


//TODO decide on final score rules
//Calculates score for a word depending on how recherché it is.
export function calculateScoreFromFrequency(frequency){

    //The higher the frequency, the lower the points:
    return (1 / frequency) * 10_000_000;
}

/** Takes a total game score and compares to highScores. Returns true only if score is a
 * new high score or there aren't yet the defined amount of high score holders.
 */
export function isHighScore(score, highScores){
    function isThereALowerHighScoreCB(currentHighScore){
        return currentHighScore.score < score;
    }
    return ((highScores.length < maxHighScoreHolders) || highScores.find(isThereALowerHighScoreCB));
}

/**
 * Adds new post to the array of high scores, or if there are no free spaces removes whichever
 * score is lowest to make space.
 * @param highScoreArray an array of {name: String, score: int}-objects
 * @param newHighScorer a String, representing the name to add
 * @param newHighScore an int, representing the score to add
 * @returns array of High Scores.
 */
export function addNewHighScore(highScoreArray, newHighScorer, newHighScore){
    const newHighScoreObject = {name: newHighScorer, score:newHighScore}

    if (highScoreArray.length < maxHighScoreHolders) return [...highScoreArray, newHighScoreObject]

    let newHighScoreArray = [...highScoreArray].sort((a,b) => a.score - b.score)
    newHighScoreArray[0] = newHighScoreObject
    return newHighScoreArray
}