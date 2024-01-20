document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");

  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the entered username and password
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Check if the username and password are correct
    if (enteredUsername === "yasharth" && enteredPassword === "yasharth"||enteredUsername === "yash" && enteredPassword === "ninni"||enteredUsername === "divyansh" && enteredPassword === "topper"||enteredUsername === "ali" && enteredPassword === "alibhaii"||enteredUsername === "himamnshu" && enteredPassword === "cinekala_ka_dalal"||enteredUsername === "rakshit" && enteredPassword === "pookiebear"||enteredUsername === "test" && enteredPassword === "test1") {
      // Redirect to the homepage
      window.location.href = "welcome.html";
    } else {
      // Show an error message
      alert("Invalid username or password. Please try again.");
    }
  });
});
