const HttpClient = function() {
    this.get = function(aUrl, key, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                aCallback(anHttpRequest.responseText);
            }
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.setRequestHeader("Authorization", key)
        anHttpRequest.send(null);
    }
}

const Spotify = function(key) {
    this.key = key;
    this.client = new HttpClient();

    this.getRecentlyPlayed = function() {
        this.client.get('https://api.spotify.com/v1/me/player/recently-played', this.key, function(response) {
            console.log(response);
        })
    }
}