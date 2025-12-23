// 1. Import fungsi dasar Firebase (JANGAN DIHAPUS)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Data Konfigurasi Milik Anda
const firebaseConfig = {
  apiKey: "AIzaSyAkG60mCHUHdYyAGT2dCwptbnC0nStnu1s",
  authDomain: "portalgurusmansa.firebaseapp.com",
  projectId: "portalgurusmansa",
  storageBucket: "portalgurusmansa.firebasestorage.app",
  messagingSenderId: "95249894806",
  appId: "1:95249894806:web:07927625e79722227ba1b7",
  measurementId: "G-1LNEED2KVS"
};

// 3. Inisialisasi Layanan
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 4. Export agar bisa dipakai file lain
export { db, auth, provider };