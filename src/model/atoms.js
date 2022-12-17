import {atom, atomFamily, selector} from 'recoil';
import {compareWordsMatch, compareWordsMismatch, createSynonymScoreObject, extractDefinition, extractFrequency, extractSynonyms} from "../utilities/wordUtilities";
import {getRandomWord, getFrequency, getDefinitions, getSynonyms } from '../integration/API/wordsApiCall';
import {extractGivenWord} from '../utilities/wordUtilities';


const givenWordPromiseState = selector({
    key: 'givenWordPromiseState',
    get: async ({get}) => {
        const round = get(gameRound); //to get new word when new gameround

        console.log("********** gameround: " + round);
        let limit = 10;
        while(limit > 0) {
            limit--;
            try {
                const givenWord = extractGivenWord(await getRandomWord());
                console.log(givenWord);
                const definitions = await getDefinitions(givenWord);
                const synonyms = await getSynonyms(givenWord);
                // console.log(definitions);
                // console.log(synonyms);

                return {
                    givenWord,
                    definitions: extractDefinition(definitions),
                    synonyms: extractSynonyms(synonyms)
                };
            }
            catch (error) {
                console.log("ERROR from get in selector givenWordPromiseState, getting new word")
                //console.log(error)
            }
        }


    },
});


// Keeps track of number of game rounds played.
export const gameRound = atom({
    key: 'gameRound',
    default: 1,
})

export const givenWordState = selector({
    key : 'givenWordState',
    get : ({get}) => {
        return get(givenWordPromiseState).givenWord;
    }
})

// Derived state of the given word
// Will contain all synonyms of that word
export const synonymsState = selector({
    key: 'synonymsState',
    get : ({get}) => {
        return get(givenWordPromiseState).synonyms;
    }
   })

// Derived state of the given word
// Will contain the definition of that word
export const definitionState = selector({
    key: 'definitionState',
    get : ({get}) => {
        return get(givenWordPromiseState).definitions;
    }
    })

// All words entered by the user
export const enteredWordsState = atom({
    key: 'enteredWordsState',
    default: []
})

// Gets frequency for a specified word
const frequencyFamily = atomFamily({
    key: 'frequency',
    default: word => getFrequency(word)
})

// All correct words entered by the user with their score
export const enteredWordsWithScoreState = selector({
    key: 'enteredWordsWithScoreState',
    get: ({get}) => {
        function addFrequencyCB(synonym) {
            return createSynonymScoreObject(synonym, extractFrequency(get(frequencyFamily(synonym))));
        }
        return compareWordsMatch(get(enteredWordsState), get(synonymsState)).map(addFrequencyCB);
    }
})

// All incorrect words entered by their user
export const incorrectWordsState = selector({
    key: 'incorrectWordsState',
    get: ({get}) => {
        return compareWordsMismatch(get(enteredWordsState), get(synonymsState));
    }
})

// Users scores per round
export const scoresPerRoundState = atom({
    key: 'scoresPerRoundState',
    default:[],
})

// Users total score
export const totalScoreState = selector({
    key: 'totalScoreState',
    get: ({get}) => {
        return get(scoresPerRoundState).reduce((totalScore, newScore) => totalScore+newScore, 0)
    }
})