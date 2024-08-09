// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCyD-JCW9To8E3z6h3hLrQRZxegwaxwB6M',
  authDomain: 'siya-bafde.firebaseapp.com',
  databaseURL: 'https://siya-bafde-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'siya-bafde',
  storageBucket: 'siya-bafde.appspot.com',
  messagingSenderId: '1015209681726',
  appId: '1:1015209681726:web:43675e1c9a26dace65426f',
  measurementId: 'G-MJESQGKY91',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
