import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDn1WUum0sE3ijsFrwxf1yWonVcUi2YmeE",
    authDomain: "netflix-clone-c98f5.firebaseapp.com",
    projectId: "netflix-clone-c98f5",
    storageBucket: "netflix-clone-c98f5.appspot.com",
    messagingSenderId: "1065770386697",
    appId: "1:1065770386697:web:1859560f5969f491853fd8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
