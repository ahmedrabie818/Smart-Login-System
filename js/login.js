var Email = document.getElementById("email");
var Password = document.getElementById("password");
var list = JSON.parse(localStorage.getItem("users"));
document.getElementById("logInBTN").addEventListener("click", function () {
  logIn();
});
function isEmpty() {
  if (Email.value == "" || Password.value == "") {
    return true;
  } else {
    return false;
  }
}

function logIn() {
  if (isEmpty() == true) {
    document.getElementById("alert").innerHTML =
      "<span class='text-danger'> All inputs is required</span>";
    return true;
  }

  for (var i = 0; i < list.length; i++) {
    if (Email.value == list[i].email && Password.value == list[i].password) {
      localStorage.setItem("sessionUsername", list[i].name);
      window.location = "./home.html";
    } else {
      document.getElementById(
        "alert"
      ).innerHTML = `<span class="text-center text-danger">incorrect email or password

      </span>`;
    }
  }
}
