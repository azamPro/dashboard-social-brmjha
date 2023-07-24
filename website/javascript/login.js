sessionStorage.setItem("sessionStarted", "true");
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
});

document.getElementById('submit-login').addEventListener('click', () => {
    // Store user input in variables 
    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;
    // Retrieve data from server using the specified URL and parameters
    retriveData('http://localhost:8080/getData', { username: username, password: password });
})

// Retrive user data 
const retriveData = async (url = '', data = {}) => {
    // GET HTTP request
    const response = await fetch(url);
    try {
        // Contains all users data
        const users = await response.json();
        // Check if the user exists + store user data in a variable 
        let userData = authentication(users, data);
        if (typeof userData !== "undefined" &&  (userData.username.length !== 0 || userData.password.length !== 0)) {
            // Set a session storage item
            sessionStorage.setItem("userData", JSON.stringify(userData));
            // Redirct to dashboard.html page
            window.location.href = `dashboard.html`;
        }else{
            // Error message
            addRedBordeLogin();
            document.getElementById('error-msg-login').innerText='username or password wrong'
            
        }

    } catch (error) {
        // Show error in the console
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
const addRedBordeLogin = () => {
    // Make the password and password confirmation field red to indicate they don't match
    let username = document.getElementById('username-login')
    let password = document.getElementById('password-login');
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
}
