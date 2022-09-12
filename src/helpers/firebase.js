// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9qEhgBtfR4iQMd6qBFV5yyYkzY5_11Jo',
  authDomain: 'stdiwallet.firebaseapp.com',
  projectId: 'stdiwallet',
  storageBucket: 'stdiwallet.appspot.com',
  messagingSenderId: '816671421688',
  appId: '1:816671421688:web:ec347da916799352a2f70d',
  measurementId: 'G-PGKP89VC6K'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);