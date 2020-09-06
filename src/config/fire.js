import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBDjpp95B8n3jaCnsIL3TEksoqk_JN0gok",
    authDomain: "assignment-24b26.firebaseapp.com",
    databaseURL: "https://assignment-24b26.firebaseio.com",
    projectId: "assignment-24b26",
    storageBucket: "assignment-24b26.appspot.com",
    messagingSenderId: "735446836180",
    appId: "1:735446836180:web:db22852e8cb103de7a6c41"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;