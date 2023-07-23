const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Handle the form submission logic here
});

document.getElementById('submit-login').addEventListener('click',()=>{
    // Store user input in variables 
    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;
    // Retrieve data from server using the specified URL and parameters
    retriveData('http://localhost:8080/getData', { username: username, password: password });
})


// Retrive user data 
const retriveData = async (url = '', data = {}) => {
    // GET HTTP request
    const response = await await fetch(url);
    try {
        // Contains all users data
        const users = await response.json();
        // Check if the user exists + store user data 
        let userData = authentication(users, data);

        if (typeof userData !== "undefined" && (userData.username.length !== 0 || userData.password.length !== 0 ) ) {
            // Redirct to dashboard.html page and pass data as query parameters in the URL when redirecting to another page.
            const queryString = new URLSearchParams(userData).toString();
            window.location.href = `dashboard.html?${queryString}`;
        }{
            // Error message
            addRedBordeLoginr();
        }
    
    } catch (error) {
        console.log("error", error);
    }
}

// Check login credential
let authentication = (users, loginCredential) => {
    for (let user in users) {
        if (users[user].username.toLowerCase() === loginCredential.username.toLowerCase() && users[user].password == loginCredential.password) {
            return users[user];
        }
    }
}
const addRedBordeLoginr=()=>{
    // Make the password and password confirmation field red to indicate they don't match
    let username= document.getElementById('username-login')
    let password= document.getElementById('password-login');
    username.style.border= "1px solid red";
    password.style.border= "1px solid red";
}