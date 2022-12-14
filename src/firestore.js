// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgviOSbmbghblz7PsCow3bjdhlZ1I9u9c",
  authDomain: "todo-list-f8906.firebaseapp.com",
  projectId: "todo-list-f8906",
  storageBucket: "todo-list-f8906.appspot.com",
  messagingSenderId: "510425974754",
  appId: "1:510425974754:web:b065ad81b7fbd6ccbd5bbb",
  measurementId: "G-YGVMCPF59M"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const analytics = getAnalytics(app);