import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCNRwSjJmxoE30v6gJWR9MEcgNuJDaqmOA",
  authDomain: "plant-96ade.firebaseapp.com",
  databaseURL: "https://plant-96ade.firebaseio.com",
  projectId: "plant-96ade",
  storageBucket: "plant-96ade.appspot.com",
  messagingSenderId: "69768071165",
  appId: "1:69768071165:web:e6b2cce9044cd27d8cfb94",
  measurementId: "G-3CC1NT3D1W",
};
export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
