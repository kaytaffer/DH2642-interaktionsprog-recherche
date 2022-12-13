import { atom, atomFamily, selector } from 'recoil';
import {compareWordsMatch, compareWordsMismatch, createSynonymScoreObject, extractDefinition, extractFrequency, extractSynonyms} from "../utilities/wordUtilities";
import {getRandomWord, getFrequency, getDefinitions, getSynonyms } from '../integration/API/wordsApiCall';
import {extractGivenWord} from '../utilities/wordUtilities';


// Updates given word automatically when the game round is updated
// To test a given word instead of a random set return like this:
// return  getSearchedWord("word"),
export const givenWordPromiseState = selector({
    key: 'givenWordPromiseState',
    get: ({get }) => {
        get(gameRound);
        return getRandomWord();
    }
})

// Keeps track of number of game rounds played.
export const gameRound = atom({
    key: 'gameRound',
    default: 1,
})

export const givenWordState = selector({
    key : 'givenWordState',
    get : ({get}) => {
        return extractGivenWord(get(givenWordPromiseState));
    }
})

// Derived state of the given word
// Will contain all synonyms of that word
export const synonymsState = selector({
    key: 'synonymsState',
    get: async ({get}) => {
        return extractSynonyms(await getSynonyms(get(givenWordPromiseState)));
     },
   })

// Derived state of the given word
// Will contain the definition of that word
export const definitionState = selector({
    key: 'definitionState',
    get: async ({get}) => {
         return extractDefinition(await getDefinitions(get(givenWordPromiseState)));
      },
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

// Users total score
export const totalScoreState = atom({
    key: 'totalScoreState',
    default:[],
})