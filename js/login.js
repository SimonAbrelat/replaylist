import app_info from "../secrets/app.json"

var client_id = app_info.id;
var response_type = "token";
var redirect_uri =  "https://simonabrelat.github.io/replaylist/redirect.html";
var scopes = ["user-read-recently-played"
                ,"playlist-modify-public"
                ,"playlist-read-private"
                ,"playlist-modify-private"
            ];

function spotifyAuth () {
    str = "https://accounts.spotify.com/authorize?client_id=" + client_id 
        + "&responce_type=" + encodeURIComponent(response_type)
        + "&redirect_uri=" + encodeURIComponent(redirect_uri)
        + "&scope" + scopes.reduce((x, acc) => {
            acc += ((acc.length != 0) ? "%20" : "") + x;
        }, "");
    location.assign(str);
}