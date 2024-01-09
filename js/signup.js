var userName = document.getElementById("nameInput");
var userEmail = document.getElementById("emailInput");
var userPassword = document.getElementById("passwordInput");
var userList = [];

if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
}

document.getElementById("signUpBTN").addEventListener("click", function () {
  createUser();
});

function isEmpty() {
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function emailExist() {
  for (var i = 0; i < userList.length; i++) {
    if (userEmail.value == userList[i].email) {
      return true;
    }
  }
}

function createUser() {
  if (isEmpty() == true) {
    document.getElementById("warrning").innerHTML =
      "<span class='text-danger'> All inputs is required</span>";
    return true;
  }

  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  if (emailExist() == true) {
    document.getElementById("warrning").innerHTML =
      "<span class='text-danger'> email is already exist</span>";
  } else {
    userList.push(user);
    localStorage.setItem("users", JSON.stringify(userList));
    document.getElementById("warrning").innerHTML =
      "<span class='text-success'> success</span>";
    console.log(userList);
  }
}
