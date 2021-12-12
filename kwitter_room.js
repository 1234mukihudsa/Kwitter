
const firebaseConfig = {
      apiKey: "AIzaSyBHJBtmmxnnnSnfBsCfRMZroylRuoGwFnc",
      authDomain: "kwitter-e235e.firebaseapp.com",
      projectId: "kwitter-e235e",
      storageBucket: "kwitter-e235e.appspot.com",
      messagingSenderId: "209215727954",
      appId: "1:209215727954:web:e08c5bd27d500e0ebfb28b"
    };
    
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
