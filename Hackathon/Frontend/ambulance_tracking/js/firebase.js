// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWSrX6oQC7xppXiiEgF4bPj9ln9azHp74",
  authDomain: "ambulance-system-1ddac.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com", // ⚠️ ADD THIS
  projectId: "ambulance-system-1ddac",
  storageBucket: "ambulance-system-1ddac.firebasestorage.app",
  messagingSenderId: "530152972228",
  appId: "1:530152972228:web:3aea40a84d6cfa19b24e91"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
