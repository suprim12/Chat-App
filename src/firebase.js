import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


var config = {
    apiKey: "AIzaSyAeBPFZ_aJ62vpV4ooN_hMG2hw7jMcxwmI",
    authDomain: "slack-clone-app.firebaseapp.com",
    databaseURL: "https://slack-clone-app.firebaseio.com",
    projectId: "slack-clone-app",
    storageBucket: "slack-clone-app.appspot.com",
    messagingSenderId: "508869347276"
  };
  firebase.initializeApp(config);
export default firebase;