// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQo3Eb_JY8MYy1xQfj895Ph2txV_vhdBE",
  authDomain: "crud-recipes.firebaseapp.com",
  projectId: "crud-recipes",
  storageBucket: "crud-recipes.appspot.com",
  messagingSenderId: "1097883364903",
  appId: "1:1097883364903:web:5a5fecdc8e6315995b2802"
};


function get_images(){
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  console.log(storage)
}

module.exports = get_images

