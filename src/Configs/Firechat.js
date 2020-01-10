import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCpXvSSDFDZEiPoxiCdoAWNO6-fEa7ZyWQ",
  authDomain: "catchat-a1f09.firebaseapp.com",
  databaseURL: "https://catchat-a1f09.firebaseio.com",
  projectId: "catchat-a1f09",
  storageBucket: "catchat-a1f09.appspot.com",
  messagingSenderId: "21243664394",
  appId: "1:21243664394:web:d7ccb6ad998c545661e7f3",
  measurementId: "G-88E5X4YLG1"
};

let app = firebase.initializeApp(firebaseConfig);

export const Database = app.database();
export const Auth = app.auth();
