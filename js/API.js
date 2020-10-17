class Spotify {
    constructor(key) {
        this.key = key;
        this.user_id = null;
    }
    
    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            }
        })
    }

    getMe() {
        this.get('https://api.spotify.com/v1/me')
        .then(res => {
            console.log(res)
        });
    }
    
    getRecentlyPlayed() {
        this.get('https://api.spotify.com/v1/me/player/recently-played')
        .then(res => {
            console.log(res);
        })
    }

    getPlaylists() {
        this.get('https://api.spotify.com/v1/users/' + this.user_id + '/playlists')
        .then(res => {
                console.log(res);
        })
    }

    createPlaylist(playlistName, isPublic, isCollaborative, description) {
        var parameters = new Object();
        parameters.name = playlistName;
        parameters.public = isPublic;
        parameters.collaborative = isCollaborative;
        parameters.description = description;
        var jsonParameters = JSON.stringify(parameters);
    }
}
