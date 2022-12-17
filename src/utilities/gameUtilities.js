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
    function isHighEnoughACB(currentHighScore){
        return currentHighScore < score;
    }
    return (highScores.length <= maxHighScoreHolders) || highScores.find(isHighEnoughACB);
}