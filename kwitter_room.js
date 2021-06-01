
 var firebaseConfig = {
      apiKey: "AIzaSyDOICsE1bhSTdSvjD0xWp38OqeifgBxjUI",
      authDomain: "social-web-123456789.firebaseapp.com",
      databaseURL: "https://social-web-123456789-default-rtdb.firebaseio.com",
      projectId: "social-web-123456789",
      storageBucket: "social-web-123456789.appspot.com",
      messagingSenderId: "107586277726",
      appId: "1:107586277726:web:855485df64edaef7543fcf",
      measurementId: "G-L3G3W1CHVF"
    };


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)'>#0" +Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page_html";
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
