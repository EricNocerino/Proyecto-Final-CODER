// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBZaQr95orLdCLkKKvZckfJ48zouuagBsQ",
	authDomain: "taz-store-c561f.firebaseapp.com",
	projectId: "taz-store-c561f",
	storageBucket: "taz-store-c561f.appspot.com",
	messagingSenderId: "723716460164",
	appId: "1:723716460164:web:372ad4df3455cc1b953cd1",
};

// Initialize Firebase
const miApp = initializeApp(firebaseConfig);

export const db = getFirestore(miApp);
