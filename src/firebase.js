import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAvcoBk9YYAs7IoH526ubRS3k6tY4pL-pQ",
    authDomain: "cl-tech-12579.firebaseapp.com",
    databaseURL: "https://cl-tech-12579-default-rtdb.firebaseio.com",
    projectId: "cl-tech-12579",
    storageBucket: "cl-tech-12579.appspot.com",
    messagingSenderId: "726830925012",
    appId: "1:726830925012:web:923441b83413ca23b36741",
    measurementId: "G-337WCFMHXL"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };