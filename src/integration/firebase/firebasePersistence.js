// ACB updates atom value according to changes in firebase given a snapshot of the database state
import {get, off, onValue, ref, set} from "firebase/database";
import {fireBDataB} from "./firebasInitialization";

function onDatabaseChangeACB(snapshot) {
    if (snapshot.exists()) {
        return snapshot.val()
    } else {
        console.log("When trying to find persistent content no data was available");
        return null;
    }
}

export function checkEmptyFirebaseDBPath(databasePath, callback){
    function treatSnapshotACB(snapshot){
        callback(onDatabaseChangeACB(snapshot))
    }
    return get(ref(fireBDataB, databasePath)).then(treatSnapshotACB).catch((error) => {
        console.error(error);
    })
}

export function subscribeToDBPath(databasePath, callback) {
    function treatSnapshotACB(snapshot){
        callback(onDatabaseChangeACB(snapshot))
    }
    onValue(ref(fireBDataB, databasePath), treatSnapshotACB);
}

export function unsubscribeToDBPath (databasePath) {
    off(ref(fireBDataB, databasePath), onDatabaseChangeACB)
}

//On changes in the atom, updates the persistent database.
export function onLocalChange(databasePath, valueToWrite){
    return set(ref(fireBDataB, databasePath), valueToWrite)
}
