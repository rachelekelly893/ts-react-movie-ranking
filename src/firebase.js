import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 const firebaseConfig = {
    apiKey: "AIzaSyAM7yUXDCwVCiP9UQ1d0rAO-Itf4xDRQfc",
    authDomain: "ts-react-movie-ranking.firebaseapp.com",
    projectId: "ts-react-movie-ranking",
    storageBucket: "ts-react-movie-ranking.appspot.com",
    messagingSenderId: "218481037110",
    appId: "1:218481037110:web:ce928a2ed1fed6130d2d97"
    };
  
firebase.initializeApp(firebaseConfig);
  
export default firebase;