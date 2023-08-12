import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCgHkvlC5M7N-Qf1098Eojur-GwXIBWJJ4",
    authDomain: "primer-e-commerce-carol.firebaseapp.com",
    projectId: "primer-e-commerce-carol",
    storageBucket: "primer-e-commerce-carol.appspot.com",
    messagingSenderId: "961140492355",
    appId: "1:961140492355:web:4c5a2109ce4a8cfdebecf6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)