//Importing database
import * as firebase from 'firebase';

//get keys and whatnot from hidden env file
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET} from '@env';

// Initialize Firebase
const firebaseConfig = {
  apiKey: {API_KEY},
  authDomain: {AUTH_DOMAIN},
  databaseURL: {DATABASE_URL},
  storageBucket: {STORAGE_BUCKET},
};

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

export default firebaseApp;

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
