const signupForm = document.getElementById('form-signup');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
});

// If the submit botton is pressed call the storData method and retrive user input
document.getElementById('submit-signup').addEventListener('click', () => {
  // Storing user input in variables 
  let username = document.getElementById('username-signup').value;
  let name = document.getElementById('name-signup').value;
  let password = document.getElementById('password-signup').value;
  let passwordConfirm = document.getElementById('password-confirm-signup').value;
  // Check both field matches
  if (passwordConfirm == password) {
    if (username.length != 0 && password.length != 0 && name.length != 0) {
    storData('http://localhost:8080/addData', { username: username, password: password, name: name, like: 0, comment: 0, tweet: 0, views: 0 });
    }else {
      // Error message
      addRedBordeSignupTologinFields();
    }
  } else {
    // Error indicator when password fields don't match
    addRedBorderToPasswords();
  }

});
const addRedBorderToPasswords = () => {
  // Make the password and password confirmation fields red to indicate they don't match
  let parentPasswordField = document.getElementById('password-confirm-signup');
  let parentPasswordConfirmField = document.getElementById('password-signup');
  parentPasswordField.style.border = "1px solid red";
  parentPasswordConfirmField.style.border = "1px solid red";
}

const storData = async (url = '', userData = {}) => {
  // POST request 
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(userData),
  });

  try {
    // server response 
    const status = await response.json();

    // When the username does not already exist on the server, it responds with 1
    if (status == '1') {
        // Set a session storage item
        sessionStorage.setItem("userData", JSON.stringify(userData));
        // Redirct to dashboard.html page 
        window.location.href = `dashboard.html`;
    } else {
      // If the username is already taken, make the border red
      let username = document.getElementById('username-signup')
      username.style.border = "1px solid red";
      document.getElementById('error-msg-signup').innerText='Username already taken message';
    }

  } catch (error) {
    // Show error in the console
    console.log("error", error);
  }
};

const addRedBordeSignupTologinFields = () => {
  document.getElementById('error-msg-signup').innerText=''
  // Turn all fields' borders red in case there is an error
  addRedBorderToPasswords()
  let username = document.getElementById('username-signup')
  let name = document.getElementById('name-signup');
  username.style.border = "1px solid red";
  name.style.border = "1px solid red";

}