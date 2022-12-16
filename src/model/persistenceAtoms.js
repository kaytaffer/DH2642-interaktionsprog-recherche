//RELEVANT IMPORTS
import {atom} from 'recoil';
import {
    checkEmptyFirebaseDBPath,
    onLocalChange,
    subscribeToDBPath,
    unsubscribeToDBPath
} from "../integration/firebase/firebaseModel";

//RECOIL EFFECTS:
//Effect that syncs the high score data from recoil("state") to firebase database(persistence)
//TODO: Lift relevant functions to utility
const syncStorageEffect = () => ({setSelf, onSet, trigger}) => {

    const databasePath = '/highScore';

// Initialize atom value to the remote storage state if there is one
    if (trigger === 'get') { // Avoid expensive initialization
        setSelf(checkEmptyFirebaseDBPath(databasePath));
    }

    //Subscribes to changes in the database on the relevant path
    subscribeToDBPath(databasePath);

    // Subscribe to local changes and update the database value
    onSet(onLocalChange(databasePath, highScoreState));

    // Cleanup remote storage subscription
    return unsubscribeToDBPath(databasePath);
};

//The highscore atom containing the local highScore.
export const highScoreState = atom({
    key: 'highScoreState',
    default: {
        highScoreNames: ['dogge',],
        highScores: [-1]
    },
    effects: [syncStorageEffect()]
})



