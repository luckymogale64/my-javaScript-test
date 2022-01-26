
function SUBMIT() {
  const Email = document.getElementById("Email");
  const Password = document.getElementById("Password");
   
if (email == "warning" && password == "warning") {
     if (Email == "")
    alert("email can't be empty");
    return;
  }

  if (Password == "") {
    alert("password can't be empty");
    return;
window.location.href = "./home.html";

  }
}