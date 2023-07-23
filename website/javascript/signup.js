const signupForm = document.getElementById('form-signup');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Handle the form submission logic here
});

document.getElementById('submit-signup').addEventListener('click', () => {
  // Storing user input in variables 
  let username = document.getElementById('username-signup').value;
  let email = document.getElementById('email-signup').value;
  let password = document.getElementById('password-signup').value;
  let passwordConfirm = document.getElementById('password-confirm-signup').value;
if(passwordConfirm == password){
  storData('http://localhost:8080/addData', { username: username, password: password, email: email, like: 0, comment: 0, tweet: 0, views: 0 });
}else{
  // Error indicator
  addRedBorderSignup();
  
}
  
});
const addRedBorderSignup=()=>{
  // Make the password and password confirmation field red to indicate they don't match
  let parentPasswordField= document.getElementById('password-confirm-signup');
  let parentPasswordConfirmField= document.getElementById('password-signup');
  parentPasswordField.style.border= "1px solid red";
  parentPasswordConfirmField.style.border= "1px solid red";
}
const storData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
  });
  
  try {
    //server response 
    const newData = await response.json();
    // Redirect to dashboard.html
    if(data.username.length != 0 && data.password.length != 0 && data.email.length != 0){
    const queryString = new URLSearchParams(data).toString();
    window.location.href = `dashboard.html`;
    }
  
  } catch (error) {
    console.log("error", error);
  }
};
