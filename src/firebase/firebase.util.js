import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyA5bxBgTxx6vOR38ylDHSia3z8Ksig_jY0",
        authDomain: "eshop-db-5695f.firebaseapp.com",
        databaseURL: "https://eshop-db-5695f.firebaseio.com",
        projectId: "eshop-db-5695f",
        storageBucket: "eshop-db-5695f.appspot.com",
        messagingSenderId: "1068748528646",
        appId: "1:1068748528646:web:63e15924cc6546fefcf787",
        measurementId: "G-990JR2THKG"
      
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;



