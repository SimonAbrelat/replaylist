//const app_info = require("../secrets/app.json");

var client_id = "aaf992b285344c0a827bac7f722b8df4";
var response_type = "token";
var redirect_uri =  "https://simonabrelat.github.io/replaylist/redirect.html";
var scopes = ["user-read-recently-played"
                ,"playlist-modify-public"
                ,"playlist-read-private"
                ,"playlist-modify-private"
            ];

function spotifyAuth () {
    let scope = "";
    scopes.forEach((s) => {
        scope += ((scope.length != 0) ? "%20" : "") + s;
    })
    str = "https://accounts.spotify.com/authorize"
        + "?client_id=" + encodeURIComponent(client_id) 
        + "&response_type=" + encodeURIComponent(response_type)
        + "&redirect_uri=" + encodeURIComponent(redirect_uri)
        + "&scope=" + encodeURIComponent(scope)
        alert(str);
    location.assign(str);
}