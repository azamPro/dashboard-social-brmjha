let changeUI = () => {
    // Get a session storage item
    var storedUser = JSON.parse(sessionStorage.getItem("userData"));
    // Update data on an HTML page with user data + Retrieve the object from session storage
    document.getElementById('welcome-message').innerText=`Welcome ${storedUser.name}`
    document.getElementById('username').innerText=storedUser.username;
    document.getElementById('likes-num').innerText = storedUser.like;
    document.getElementById('comments-num').innerText = storedUser.comment;
    document.getElementById('tweets-num').innerText = storedUser.tweet;
    document.getElementById('views-num').innerText = storedUser.views;
    
}

changeUI()



