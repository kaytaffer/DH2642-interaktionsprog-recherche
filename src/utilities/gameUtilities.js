//TODO add more

// Utility methods concerning game logic here:

export const roundLength = 30;
export const numberOfRounds = 5;


//TODO decide on final score rules
//Calculates score for a word depending on how recherché it is.
export function calculateScoreFromFrequency(frequency){

    //The higher the frequency, the lower the points:
    return (1 / frequency) * 10_000_000;
}
