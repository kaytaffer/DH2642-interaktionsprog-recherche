import { atom, atomFamily, selector, useSetRecoilState } from 'recoil';
import {compareWordsMatch, compareWordsMisMatch, createSynonymScoreObject, extractDefinition, extractFrequency, extractSynonyms} from "../utilities/wordUtilities";
import { getRandomWord, getFrequency } from '../integration/API/wordsApiCall';
import {extractGivenWord} from '../utilities/wordUtilities';
    
export const givenWordPromiseState = atom({
    key: 'givenWordPromiseState',
    default: getRandomWord(),
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
    get: ({get}) => {
        return extractSynonyms(get(givenWordPromiseState));
    }
})

// Derived state of the given word
// Will contain the definition of that word
export const definitionState = selector({
    key: 'definitionState',
    get: ({get}) => {
        return extractDefinition(get(givenWordPromiseState));
    }
})

// All words entered by the user
export const enteredWordsState = atom({
    key: 'enteredWordsState',
    default: []
})

const frequencyFamily = atomFamily({
    key: 'frequency',
    default: word => getFrequency(word)
    
})

// All words entered by the user with their frequency
export const enteredWordsWithFrequencyState = selector({
    key: 'enteredWordsWithFrequencyState',
    get: ({get}) => { //TODO: un-arrow notation this

        function addFrequencyCB(synonym) {
            // TODO: call function to get frequencies
            return createSynonymScoreObject(synonym, extractFrequency(get(frequencyFamily(synonym))));
        }
        return compareWordsMatch(get(enteredWordsState), get(synonymsState)).map(addFrequencyCB);
        //return get(synonymsState).map(addFrequencyCB);
    }
})