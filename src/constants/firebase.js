/**
 * Firebase Reference/Init
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import * as Firebase from 'firebase';

let firebaseInitialized = false;


  Firebase.initializeApp({
  apiKey: "AIzaSyCa0TF3QOdX-UcK-eNCSTAFhIpK5WzO02w",
    authDomain: "boilerplate-23818.firebaseapp.com",
    databaseURL: "https://boilerplate-23818.firebaseio.com",
    projectId: "boilerplate-23818",
    storageBucket: "boilerplate-23818.appspot.com",
    messagingSenderId: "443078071781"
  });

  firebaseInitialized = true;


export const FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
export default firebaseInitialized ? Firebase : null;
