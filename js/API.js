function get(url, key) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
        }
    })
    .then(r => r.json())
}

function getId(key) {
    console.log(key)
    return this.get('https://api.spotify.com/v1/me', key).then(r => r.id);
}

class Spotify {
    constructor(key, id) {
        this.key = key;
        this.user_id = id;
    }

    get(url) {
        return get(url, this.key)
    }
    
    getMe() {
        return this.get('https://api.spotify.com/v1/me');
    }

    getRecentlyPlayed() {
        return this.get('https://api.spotify.com/v1/me/player/recently-played?limit=50')
        .then(function(result) {
            return result.items;
        })
    }

    getPlaylists() {
        return this.get('https://api.spotify.com/v1/users/' + this.user_id + '/playlists')
                   .then(r => r.items);
    }

 
    addToPlaylist(playlistID, uriList) {
        var url = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: {
                "uris": uriList
            } 
        })
    }
/*
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