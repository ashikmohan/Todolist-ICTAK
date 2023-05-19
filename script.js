// Function to validate login
function validateLogin(username, password, callback) {
  

  // Validate username
  function validateUsername() {
    var user = document.getElementById("user").value;
    var error1 = document.getElementById("error1");
    var pattern = /^([A-Za-z])/;

    if (user.match(pattern)) {
      error1.innerHTML = "Username is valid";
      error1.style.color = "black";
      return true;
    } else {
      error1.innerHTML = "Invalid Username";
      error1.style.color = "white";
      return false;
    }
  }

  // Validate password
  function validatePassword() {
    var pass = document.getElementById("pass").value;
    var error2 = document.getElementById("error2");
    var pattern = /^([0-9])/;

    if (pass.match(pattern)) {
      error2.innerHTML = "Password Valid";
      error2.style.color = "black";
      return true;
    } else {
      error2.innerText = "Password invalid";
      error2.style.color = "white";
      return false;
    }
  }

 
  const loginValidation = () => {
    if (validateUsername() && validatePassword()) {
      if (username === "admin" && password === "12345") {
        callback(null); 
      } else {
        callback("Invalid credentials"); 
      }
    }
  };

 
  setTimeout(loginValidation, 2000); 
}


function FormSubmit(event) {
  event.preventDefault(); 

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  // Validate the login 
  validateLogin(username, password, (error) => {
    if (error) {
      console.log("Login failed:", error);
    } else {
      console.log("Login successful!");
      // Redirect to the main page 
      window.location.href = "main page.html";
    }
  });
}

// Attach the event handler to the form submission
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", FormSubmit);
