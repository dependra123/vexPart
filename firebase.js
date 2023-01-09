import { initializeApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

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
let currTeam = null;

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const collectInput = (team) => {
  currTeam = team;
};

const WriteTOdb = async (data) => {
  
  try {
      const docRef = await addDoc(collection(db, currTeam), {
        data

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};

const getData = async () => {
  let retrivedData = [];
  const querySnapshot = await getDocs(collection(db, currTeam));

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    retrivedData.push(doc.data());
  });
  return retrivedData;
};

export default WriteTOdb;
export { collectInput, getData };