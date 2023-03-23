var credentialsdata = JSON.parse(localStorage.getItem("credentials")) || []
document.querySelector("form").addEventListener("submit", checkdata)
function checkdata() {
  event.preventDefault();
  var f = 0
  var email = document.querySelector("#email").value
  var password = document.querySelector("#password").value

  credentialsdata.map(function (ele) {
    if (email == ele.email && password == ele.password) {
      document.getElementById("showUsername").textContent = "Logged in as  " + ele.firstname + " ";
      window.location.assign("index.html");
      f = 1
      localStorage.setItem("username", ele.firstname);
    }
  })
  if (f == 0) {
    document.querySelector("#wrongPass").textContent = " X Ooops!  Wrong Credentials"
  }

  document.getElementById("email").value = null;
  document.getElementById("password").value = null;

}