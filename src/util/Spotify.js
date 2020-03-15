import { unstable_batchedUpdates } from "react-dom";


const clientID = "aa9c682c20c84a5fbe9a829bfb21b8b5";
const clientSecret = "2b4adf40ca5d45e48059fedd3bc719fa";
const redirectURI= "http://localhost:3000/"
const workingURL = window.location.href;

let scopes = "user-read-private user-read-email"
let accessToken = "";
let expTime = "";

const Spotify = {
  getAccessToken: function() {
    if(accessToken!==""){
      return accessToken;
    }
    else{
      window.location.href="https://accounts.spotify.com/authorize?client_id="+clientID+"&redirect_uri="+redirectURI+"&scope="+scopes+"&response_type=token&state=123"
        //Makes sure that the expiration time will timeout the window

    accessToken = workingURL.match(/access_token=([^&]*)/)[1]
    expTime = workingURL.match(/expires_in=([^&]*)/)[1]
    console.log(accessToken);
    console.log(expTime);
    window.setTimeout(()=>{accessToken=""},expTime*1000)
    window.history.pushState('Acess Token', null,'/');
      
    }

  }
}



export default Spotify;


//Authorization call structure
//'https://accounts.spotify.com/authorize' +'?response_type=code' +'&client_id=' + my_client_id +(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +'&redirect_uri=' + encodeURIComponent(redirect_uri));

//This is the CORS redirect 
//https://cors-anywhere.herokuapp.com/
