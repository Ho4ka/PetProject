
import Firebase from 'firebase/app';

import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDKssT9vsm6cjKLZ_pPsxuzACRdMACoHds",
  authDomain: "petproject-c4eb1.firebaseapp.com",
  databaseURL: "https://petproject-c4eb1.firebaseio.com",
  projectId: "petproject-c4eb1",
  storageBucket: "",
  messagingSenderId: "398497090884",
  appId: "1:398497090884:web:8168767132c81792"
};

// Initialize Firebase.

Firebase.initializeApp(config);
 const db = Firebase.firestore();
 export default db;