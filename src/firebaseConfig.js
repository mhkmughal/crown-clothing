import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA14t0mOtflSlzw9l082CQTWm_Llbgypzo",
    authDomain: "test-d21a0.firebaseapp.com",
    databaseURL: "https://test-d21a0.firebaseio.com",
    projectId: "test-d21a0",
    storageBucket: "",
    messagingSenderId: "266091375465",
    appId: "1:266091375465:web:b8ddfb2caabb34864d6bf8"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  

  export const createUserProfileDocument = async(userAuth, additionalData)=> {
      if(!userAuth)
        return ;
        const userRef  = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
      if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }
        catch(error){
          //console.log(error.message);
        }
      }
      return userRef;
    };

  export default firebaseConfig;