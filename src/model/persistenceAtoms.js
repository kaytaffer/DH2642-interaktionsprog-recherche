//RELEVANT IMPORTS
import {atom, atomFamily} from 'recoil';
import {checkEmptyFirebaseDBPath, onLocalChange, subscribeToDBPath,unsubscribeToDBPath}
    from "../integration/firebase/firebasePersistence";

//Effect that syncs the high score data from recoil("state") to firebase database(persistence)
/*
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
*/

const syncStorageEffect = (databasePath, defaultValue) => ({setSelf, onSet, trigger}) => {

// Initialize atom value to the remote storage state if there is one
    if (trigger === 'get') { // Avoid expensive initialization
        checkEmptyFirebaseDBPath(databasePath, setSelf).catch( () =>
        {
            setSelf(defaultValue)
        })
    }

    //Subscribes to changes in the database on the relevant path
    subscribeToDBPath(databasePath, setSelf);

    // Subscribe to local changes and update the database value
    onSet(newValue => {onLocalChange(databasePath, newValue)});

    // Cleanup remote storage subscription
    return () => unsubscribeToDBPath(databasePath);
};

//The highScore atom containing the local highScore.
export const highScoreState = atom({
    key: 'highScoreState',
    default: [],
    effects: [syncStorageEffect('/highScore/', [])]
})

export const mostRechercheWordState = atomFamily({
    key: 'mostRechercheWord',
    default: null,
    effects: userID => [syncStorageEffect('/users/' + userID + '/rechercheWord/', null)]
});

export const usersBestGameState = atomFamily({
    key: 'usersBestGameState',
    default: null,
    effects: userID => [syncStorageEffect('/users/' + userID + '/bestGame/', null)]
});
