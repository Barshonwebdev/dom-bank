document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const email = emailField.value;
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  
  if (email == "bc@gmail.com" && password == "webdev") {
    console.log(email);
    console.log(password);
  }
});
