class Spotify {
    constructor(key) {
        this.key = key;
        this.user_id = null;
    }
    
    get(url) {
        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            }
        })
        .then(r => r.json())
    }

    getMe() {
        res = this.get('https://api.spotify.com/v1/me');
        res.then(r => this.user_id = r.id);
        console.log(this.user_id);
    }

    getRecentlyPlayed() {
        res = this.get('https://api.spotify.com/v1/me/player/recently-played')
        .then(r => {
            console.log(r);
        })
    }

    getPlaylists() {
        this.get('https://api.spotify.com/v1/users/' + this.user_id + '/playlists')
        .then(r => {
                console.log(r);
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
