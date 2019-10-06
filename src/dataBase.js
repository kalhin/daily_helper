  import firebase from "firebase"
  
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCNXB4OY8ec0X4R_Q57TBGfCfdY4xG_G28",
    authDomain: "daily-helper-92105.firebaseapp.com",
    databaseURL: "https://daily-helper-92105.firebaseio.com",
    projectId: "daily-helper-92105",
    storageBucket: "daily-helper-92105.appspot.com",
    messagingSenderId: "895785530615",
    appId: "1:895785530615:web:cfbec82a75370bea9ecff2",
    measurementId: "G-6JTWFGJ549"
  };
  // Initialize Firebase
  let dataBase = firebase.initializeApp(firebaseConfig);
  
  export default dataBase;