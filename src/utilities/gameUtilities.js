//TODO add utilities concerning game logic here:

export const roundLength = 30;


//TODO decide on final score rules
//Calculates score for a word depending on how recherché it is.
export function calculateScoreFromFrequency(frequency){
    //The higher the frequency, the lower the points:
    return (1 / frequency) * 1000;
}
