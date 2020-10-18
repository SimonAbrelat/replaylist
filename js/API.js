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
    
    getSongsInPlaylist(playlistID) {
        return this.get("https://api.spotify.com/v1/playlists/" + playlistID + "/tracks")
                   .then(r => r.items);
    }

 
    addToPlaylist(playlistID, uriList) {
        var url = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks?uris=";
        let uri = null;
        for (uri in uriList) {
            if (uri != 0) {
                url += ",";
            }
            url += encodeURIComponent(uriList[uri]);
        }
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.key
            }
        })

    }

    addTag(newPL) {
        var newDesc = "replaylist# " + newPL.description
        var url = "https://api.spotify.com/v1/playlists/" + newPL.id
        fetch(url, {
            method: "PUT",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: JSON.stringify({
                'description': newDesc
            })
        })
    }

    createNewPL(name) {
        var url = "https://api.spotify.com/v1/users/" + this.user_id + " /playlists";

        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: JSON.stringify({
                'name': name,
                'public': false,
                'description': "replaylist#"
            })
        })
    }
            
        /*
        var url = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
        let uri = null;
        let encList = []
        for (uri in uriList) {
            encList.push(encodeURIComponent(uriList[uri]));
        }
        console.log(url);
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.key
            },
            body: {
                "uris" : encList
            }
        })
        */
}