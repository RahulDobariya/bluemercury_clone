document.querySelector("form").addEventListener("submit",getcredentials)
var signupdata=JSON.parse(localStorage.getItem("credentials"))||[]

    

function getcredentials(){
    event.preventDefault();
    
    var info={
        email:document.querySelector("#email").value,
        firstname:document.querySelector("#firstname").value,
        lastname:document.querySelector("#lastname").value,
        password:document.querySelector("#password").value,
    }
    if (info.lastname != "" && info.email != "" && info.password != "" && info.firstname != "") {
      //  document.getElementById("show").textContent="Login Successful"
         alert("Account Created Successfully, You will be redirected to login Page!")
  }
  signupdata.push(info);
  localStorage.setItem("credentials",JSON.stringify(signupdata))
  document.querySelector("#email").value=""
  document.querySelector("#firstname").value=""
  document.querySelector("#lastname").value=""
  document.querySelector("#password").value=""
  window.location.href="login.html"
}