var firebaseConfig = {
    apiKey: "AIzaSyAf_wY2KAroAeMNDLEOrqGAGnVkd6SU4wc",
    authDomain: "let-s-chat-app-32856.firebaseapp.com",
    projectId: "let-s-chat-app-32856",
    storageBucket: "let-s-chat-app-32856.appspot.com",
    messagingSenderId: "469754388662",
    appId: "1:469754388662:web:f18024d686ebe10c8e8617"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      console.log("room name-"+ Room_names);
      row="<div class='room_name' id="+ Room_names+ " onclick='redirect_to_room_name(this.id)' >#"+ Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row;
     });});}
getData();