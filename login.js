var Email = [];
var Password = [];

function SUBMIT() {
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;

  if (Email == "") {
    alert("email can't be empty");

    return;
  }

  if (Password == "") {
    alert("password can't be empty");
    return;
  }

  if (Email == "user@gmail.com" && Password == "mypassword") {
    console.log(Email, Password);
    location.href = "./home.html";
  } else {
    alert("email or password are incorrect");
  }
}
