//Importing database
import * as firebase from 'firebase';

//get keys and whatnot from hidden env file
import {API_KEY, AUTH_DOMAIN, DATABASE_URL,PROJ_ID, STORAGE_BUCKET, MESS_ID, APP_ID, MEAS_ID} from '@env';

// Initialize Firebase
const firebaseConfig = {
  apiKey: {API_KEY},
  authDomain: {AUTH_DOMAIN},
  databaseURL: {DATABASE_URL},
  projectId: {PROJ_ID},
  storageBucket: {STORAGE_BUCKET},
  messagingSenderId: {MESS_ID},
  appId: {APP_ID},
  measurementId: {MEAS_ID},
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
