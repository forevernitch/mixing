


const clientID = "aa9c682c20c84a5fbe9a829bfb21b8b5";
const clientSecret = "2b4adf40ca5d45e48059fedd3bc719fa";
let accessToken = "";
const redirectURI="http://localhost:3000"
var scopes = "user-read-private user-read-email"

const Spotify = {
  getAccessToken: function() {
    fetch("https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize" +
          "?response_type=code" +
          "&client_id=" +
          clientID +
          (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
          "&redirect_uri=" +
          encodeURIComponent(redirectURI)
      ).then(response=>{console.log(response)
    
    
    
    /*
    fetch("/login", function(req, res) {
      var scopes = "user-read-private user-read-email";
      res.redirect(
        "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize" +
          "?response_type=code" +
          "&client_id=" +
          clientID + 
          (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
          "&redirect_uri=" +
          encodeURIComponent(redirectURI)
      ).then(response=>{console.log(response)})*/
    });
  }
};


//
export default Spotify.getAccessToken();




//This is the CORS redirect 
//https://cors-anywhere.herokuapp.com/
