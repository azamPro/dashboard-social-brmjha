document.getElementById('submit-login').addEventListener('click',()=>{
    // Storing user input in variables 
    let username = document.getElementById('username-signup').value;
    let email = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    
    storeData('http://localhost:8080/addData', { username: 'sss', password: 'ssss' ,email:'ss', like: 0, comment: 0, tweet: 0, views: 0});
})

const storeData = async ( url = '', data = {})=>{
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
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }