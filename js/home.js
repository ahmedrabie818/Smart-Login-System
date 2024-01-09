document.getElementById("name").innerHTML = `welcome 
  ${localStorage.getItem("sessionUsername")}`;

document.getElementById("demo").addEventListener("click", function () {
  logOut();
});
function logOut() {
  localStorage.removeItem("sessionUsername");
}
