// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCELoab9BR3rgH9S-qgH3WRUKxoOojDu5c",
    authDomain: "kwitter-5dc26.firebaseapp.com",
    databaseURL: "https://kwitter-5dc26-default-rtdb.firebaseio.com",
    projectId: "kwitter-5dc26",
    storageBucket: "kwitter-5dc26.appspot.com",
    messagingSenderId: "902120725980",
    appId: "1:902120725980:web:9792ef0816ed5ebbbc4319"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData(){firebase.database().ref("/")}