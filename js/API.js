const HttpClient = function() {
    this.get = function(aUrl, key) {
        return new Promise((resolve, reject) => {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.setRequestHeader("Authorization", key)
            anHttpRequest.send(null);
            anHttpRequest.onload = () => {
                resolve(anHttpRequest.response)
            }
            anHttpRequest.onerror = () => {
                reject(ananHttpRequest.response)
                console.log("API call to Spotify failed")
            }
        });
    }
}

const Spotify = function(key) {
    this.key = key;
    this.client = new HttpClient();
    this.user_id;
    this.client.get('https://api.spotify.com/v1/me', this.key).then(res => {
        this.user_id = res.id;
    })
    
    this.getRecentlyPlayed = function() {
        this.client.get('https://api.spotify.com/v1/me/player/recently-played', this.key).then(res => {
            console.log(res);
        })
    }

    this.getPlaylists = function() {
        this.client.get('https://api.spotify.com/v1/users/' + user_id + '/playlists', this.key).then(res => {
            console.log(res);
        })
    }

    this.createPlaylist = function(playlistName, isPublic, isCollaborative, description) {
        var parameters = new Object();
        parameters.name = playlistName;
        parameters.public = isPublic;
        parameters.collaborative = isCollaborative;
        parameters.description = description;
        var jsonParameters = JSON.stringify(parameters);
    }
}