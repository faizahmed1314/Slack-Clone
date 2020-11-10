import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFAE7A-w9cL_W40rH-4DE2M7xzDwlNrnQ",
  authDomain: "slack-clone-45e96.firebaseapp.com",
  databaseURL: "https://slack-clone-45e96.firebaseio.com",
  projectId: "slack-clone-45e96",
  storageBucket: "slack-clone-45e96.appspot.com",
  messagingSenderId: "187285854176",
  appId: "1:187285854176:web:990114f04b23464458bd85",
  measurementId: "G-2KG6YEVZNG",
};

const firebassApp = firebase.initializeApp(firebaseConfig);
const db = firebassApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
