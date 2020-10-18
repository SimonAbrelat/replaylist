class Spotify {
    constructor(key) {
        this.key = key;
        this.user_id = null;
        getMe();
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
        this.get('https://api.spotify.com/v1/me')
        .then(r => this.user_id = r.id)
    }

    getRecentlyPlayed() {
        this.get('https://api.spotify.com/v1/me/player/recently-played')
        .then(function(result) {
            return r.items;
        })
    }

    getPlaylists() {
        this.get('https://api.spotify.com/v1/users/' + this.user_id + '/playlists')
        .then(function(result) {
            return r.items;
        })
    }
/*
    addToPlaylist(playlistID, uriList) {
        var url = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: uriList
        })
    }

    createPlaylist(playlistName, isPublic, isCollaborative, description) {
        var parameters = new Object();
        parameters.name = playlistName;
        parameters.public = isPublic;
        parameters.collaborative = isCollaborative;
        parameters.description = description;
        var jsonParameters = JSON.stringify(parameters);
        var url = "https://api.spotify.com/v1/users/" + this.user_id + "/playlists"
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: jsonParameters
        })
    }
    */
}
