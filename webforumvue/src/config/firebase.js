 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyArobpOXgv24xU0IoYWoBAMrZheNxd5S20",
    authDomain: "webforumvue.firebaseapp.com",
    databaseURL: "https://webforumvue.firebaseio.com",
    projectId: "webforumvue",
    storageBucket: "webforumvue.appspot.com",
    messagingSenderId: "662633985301",
    appId: "1:662633985301:web:9aa86893e0d28b0385a51c",
    measurementId: "G-ZGXT3BLDJ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;