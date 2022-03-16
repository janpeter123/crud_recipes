// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const credentials = require("../credentials/credentials_do_not_share");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function Play() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: credentials.firebase_apikey,
    authDomain: credentials.firebase_auth_domain,
    projectId: credentials.firebase_projectId,
    storageBucket: credentials.firebase_storageBucket,
    messagingSenderId: credentials.firebase_messagingSenderId,
    appId: credentials.firebase_appId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
  console.log(storage);

  return <div className="play"></div>;
}

export default Play;
