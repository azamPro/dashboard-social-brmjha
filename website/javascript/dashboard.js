let changeUI= ()=>{
    // Get the query string from the current URL
    const queryString = window.location.search;
    // Create a new URLSearchParams object using the query string
    const urlParams = new URLSearchParams(queryString);
    // Update data on an HTML page with user data
    document.getElementById('likes-num').innerText=urlParams.get("like")
    document.getElementById('comments-num').innerText=urlParams.get("comment");
    document.getElementById('tweets-num').innerText=urlParams.get("tweet"); 
    document.getElementById('views-num').innerText=urlParams.get("views"); 
}

changeUI()