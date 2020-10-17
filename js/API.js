const Spotify = function(key) {
    this.key = key;
    this.client = new HttpClient();
    this.user_id;
    
    this.get = function(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + key
            }
        })
    }

    this.get('https://api.spotify.com/v1/me').then(res => console.log(res));
    
    this.getRecentlyPlayed = function() {
        this.get('https://api.spotify.com/v1/me/player/recently-played')
        .then(res => {
            console.log(res);
        })
    }

    this.getPlaylists = function() {
        this.get('https://api.spotify.com/v1/users/' + user_id + '/playlists')
        .then(res => {
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

var spotify = null;
