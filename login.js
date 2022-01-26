
function SUBMIT() {
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password`")
  location.href = "./home.html"; 
    alert("Email or Password is incorrect");
     if (Email == "") {
    alert("name can't be empty");
    return;
  }
}