function userIdLoad() {
  var userName = localStorage.getItem("username");
  document.getElementById("userId").innerHTML = userName;
}

function addRoom() {
  var roomname = document.getElementById("room_name").value;
}
function logOut() {
  window.location = "index.html";
}
