import {initializeApp} from 'firebase/app';
import {getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNwMG-QNvxg0oGmUolVIdhjavBH2vJC4U",
    authDomain: "crwn-clothing-db-190f2.firebaseapp.com",
    projectId: "crwn-clothing-db-190f2",
    storageBucket: "crwn-clothing-db-190f2.appspot.com",
    messagingSenderId: "327223875806",
    appId: "1:327223875806:web:b7fc8c31613f12ce56ca4f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt : "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth , provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db , 'users' , userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        }
        catch (error){
            console.log('error creating the user ', error.message);
        }
    }
    return userDocRef;
  }