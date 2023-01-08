import { initializeApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw0TdsnHgfOw42cXxQPtKktQYr-FdyA5o",
  authDomain: "vexpart-29863.firebaseapp.com",
  projectId: "vexpart-29863",
  storageBucket: "vexpart-29863.appspot.com",
  messagingSenderId: "977962012872",
  appId: "1:977962012872:web:4a626a31f60e86239395fd",
  measurementId: "G-3BZSG54LZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const WriteTOdb = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};


export default WriteTOdb;