
// Retrive user data 
const user = async ( url = '', data = {})=>{
    // GET HTTP request
      const response = await await fetch(url);
      try {
        // Contains all users data
        const users = await response.json();
       // Check if the user exists 
        let userData =authentication(users,data);
    
        if (typeof userData !== "undefined") {
            // Update data on an HTML page 
            changeUI(userData);
          }
        
        return users;        
      }catch(error) {
      console.log("error", error);
      }
  }

 user('http://localhost:8080/getData',{username:'azampro',password:'1234'});

 
  // Check login credential
 let authentication= (users,loginCredential)=>{
    for (let user in users) {
        if (users[user].username.toLowerCase() === loginCredential.username.toLowerCase() && users[user].password== loginCredential.password){
           return users[user];
        }
      }
}

// Update data on an HTML page with user data
let changeUI= (data)=>{
    document.getElementById('likes-num').innerText=data.like;
    document.getElementById('comments-num').innerText=data.comment;
    document.getElementById('tweets-num').innerText=data.tweet;
    document.getElementById('views-num').innerText=data.views;
}

 