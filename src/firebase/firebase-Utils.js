import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmpjnCxsWZJ-JwSopYMAuCfw5Lk5Ar3Kg",
    authDomain: "crwn-db-da1f1.firebaseapp.com",
    databaseURL: "https://crwn-db-da1f1.firebaseio.com",
    projectId: "crwn-db-da1f1",
    storageBucket: "crwn-db-da1f1.appspot.com",
    messagingSenderId: "315128833871",
    appId: "1:315128833871:web:e0a0aacc6a31d69842c73a",
    measurementId: "G-EVZJLSLE7T"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {

            console.log('error creating user', error.message)

        }
    }

    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
