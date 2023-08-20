const pass = document.querySelector(".password");
const userName = document.querySelector(".name");
const loginButton = document.querySelector(".login");
const errorMessage = document.querySelector(".error-message");

//login check password
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (pass.value == "1510") {
    window.location.href = "main.html";
  } else {
    // Show error message and hide form
    errorMessage.style.display = "block";
    document.querySelector(".loginForm").style.display = "none";

    // After 1 second, hide the error message and show the form again
    setTimeout(function () {
      errorMessage.style.display = "none";
      document.querySelector(".loginForm").style.display = "flex";
      pass.value = "";
      userName.value = "";
    }, 1000);
  }
});
