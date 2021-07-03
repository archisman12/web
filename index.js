firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      
    } else {
      // User is signed out.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    
}