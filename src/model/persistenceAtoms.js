//RELEVANT IMPORTS
import {atom} from 'recoil';
import {checkEmptyFirebaseDBPath, onLocalChange, subscribeToDBPath,unsubscribeToDBPath}
    from "../integration/firebase/firebasePersistence";

//RECOIL EFFECTS:

//Effect that syncs the high score data from recoil("state") to firebase database(persistence)
const syncStorageEffect = () => ({setSelf, onSet, trigger}) => {

    const databasePath = '/highScore';

// Initialize atom value to the remote storage state if there is one
    if (trigger === 'get') { // Avoid expensive initialization
        checkEmptyFirebaseDBPath(databasePath, setSelf)
    }

    //Subscribes to changes in the database on the relevant path
    subscribeToDBPath(databasePath, setSelf);

    // Subscribe to local changes and update the database value
    onSet(newValue => {onLocalChange(databasePath, newValue)});

    // Cleanup remote storage subscription
    return () => unsubscribeToDBPath(databasePath);
};

//The highscore atom containing the local highScore.
export const highScoreState = atom({
    key: 'highScoreState',
    default: [],
    effects: [syncStorageEffect()]
})



