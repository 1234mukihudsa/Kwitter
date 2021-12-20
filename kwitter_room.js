
var firebaseConfig = {  apiKey: "AIzaSyBHJBtmmxnnnSnfBsCfRMZroylRuoGwFnc",
authDomain: "kwitter-e235e.firebaseapp.com",
databaseURL: "https://kwitter-e235e-default-rtdb.firebaseio.com",
projectId: "kwitter-e235e",
storageBucket: "kwitter-e235e.appspot.com",
messagingSenderId: "209215727954",
appId: "1:209215727954:web:e08c5bd27d500e0ebfb28b"};  
 firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room-name" + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div> <hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}