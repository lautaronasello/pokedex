import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC3ROSxoxbIRWfkQVYoAJb1_iwfxYZvBQ4',
  authDomain: 'pokeapp-cba.firebaseapp.com',
  projectId: 'pokeapp-cba',
  storageBucket: 'pokeapp-cba.appspot.com',
  messagingSenderId: '936949624068',
  appId: '1:936949624068:web:e1a6deb9950c8bcd473451',
  measurementId: 'G-TBSR3WL0G9',
};

const firebase = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export default firebaseConfig;
