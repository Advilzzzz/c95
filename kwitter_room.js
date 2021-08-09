
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA82YyY6Ttgoxg4X-c_LwMlGbQTHvDDs-g",
      authDomain: "aproject-89546.firebaseapp.com",
      databaseURL: "https://aproject-89546-default-rtdb.firebaseio.com",
      projectId: "aproject-89546",
      storageBucket: "aproject-89546.appspot.com",
      messagingSenderId: "944407464178",
      appId: "1:944407464178:web:cd5164fef2b918821ee86b"
    };

    e = localStorage.getItem("user_name");
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome "+ user_name + "! ";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+ Room_names);
      row = "<div class='room_name' id="+ Room_names+ "onclick='RedirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
