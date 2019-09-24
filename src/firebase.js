import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBsg2MeKbM5o0qtgUg6oXav4r3W6h_P2pQ",
  databaseURL: "https://pot-luck-b72e3.firebaseio.com/",
  projectId: "pot-luck-b72e3",
  messagingSenderId: "1063749967717"
};
firebase.initializeApp(config);
export default firebase;
