//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyDbiTSUW3B1bgVoQ3U7ML2D2RkjSeDApe0",
  authDomain: "pikfresh-220d7.firebaseapp.com",
  projectId: "pikfresh-220d7",
  storageBucket: "pikfresh-220d7.appspot.com",
  messagingSenderId: "330445863476",
  appId: "1:330445863476:web:6cb89375002e8146b7e861",
  measurementId: "G-SPXJ0KPPLM"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

export { firebase };