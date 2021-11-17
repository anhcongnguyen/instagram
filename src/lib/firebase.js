import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { seedDatabase } from '../seed.js';

const config = {
    apiKey: "AIzaSyAx9jYRlLDII1a994aVrFv0arnGjhUfEdw",
    authDomain: "instagram-24e33.firebaseapp.com",
    projectId: "instagram-24e33",
    storageBucket: "instagram-24e33.appspot.com",
    messagingSenderId: "95869984240",
    appId: "1:95869984240:web:4ad72ea976f339b3ab5135"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
//seedDatabase(firebase)
export { firebase, FieldValue };