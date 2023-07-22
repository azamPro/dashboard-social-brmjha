
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

        if (typeof userData !== "undefined") {
            // Redirct to dashboard.html page and pass data as query parameters in the URL when redirecting to another page.
            const queryString = new URLSearchParams(userData).toString();
            window.location.href = `dashboard.html?${queryString}`;
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