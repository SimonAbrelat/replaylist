var s = null;
var activePL = null;

async function getRePlaylists(s) {
    let totalList = await s.getPlaylists()
    let ourList = [];
    for (let i = 0; i < totalList.length; i++) {
        tags = totalList[i].description.split("#",2)
        if (tags[0] == "replaylist") {
            ourList.push(totalList[i])
        }
    }
    return ourList;
}

async function getHistory(s) {
    let ret = [];
    await s.getRecentlyPlayed().then(r => ret.push(r))
    return ret;
}

function setPlaylists(arr) {
    let options = document.getElementById("playlists");
    for (index in arr) {
        let opt = document.createElement("option");
        opt.text = arr[index].name;
        options.appendChild(opt);
    };
}

function setHistory(arr) {
    let hist = arr[0];
    let options = document.getElementById("historys");
    for (index in hist) {
        let opt = document.createElement("option");
        opt.text = hist[index].track.name;
        options.appendChild(opt);
    };
}

/*todo: get playlist from selected
Spotify:track:6S1IgeHxxOT9qVWnmsdGxe
3js3WNo60W35RQgBJDTj
*/
function getPLID(arr) {
    let target = document.getElementById("playlists").value
    for (idx in arr) {
        if (arr[idx].name == target) {
            return arr[idx].id;
        }
    }
}

function addToPL(s, play, arr) {
    let counter = 0;
    let out = []
    while (counter < arr.length) {
        //out.push(arr[counter])
        if (out.length == 5) {
            setTimeout(() => {
                s.addToPlaylist(play, out);
                out = [];
            }, 100)
        }
        counter++;
    }/*
    if (out.length != 0) {
        s.addToPlaylist(play, out)
    }
    */
}

async function updatePL(s, play, curr) {
    let ret = [];
    const songs = await s.getSongsInPlaylist(play);
    for (let c in curr) {
        let dup = false;
        for (let x in songs) {
            let h = curr[c].track;
            let p = songs[x];
            if (h.id == p.id) {
                dup = true;
                break;
            }
        }
        if (!dup){
            console.log(curr[c]);
            ret.push(curr[c].uri);
        }
    }
    addToPL(s, play, ret);
}

function addNewPL(allPLs, s) {
    var target = window.prompt("Add replaylist tag to existing Playlist:", "Playlist Name").trim();
    for (idx in allPLs) {
        console.log(allPLs[idx])
        if (allPLs[idx].name.trim() == target) {
            console.log("match found")
            s.addTag(allPLs[idx])
            location.replace("https://replaylists.netlify.app/recorder.html")
            return
        }
    } 
}

function logOut() {
    sessionStorage.clear()
    window.location.replace("https://replaylists.netlify.app/")
}
/*
function createHistoryPL() {
    playlistID = s.createPlaylist("replaylist", false, false, "#replaylist#");
    hist = s.getRecentlyPlayed();
    addList = []
    for (track in hist) {
        addList.push(track.track.uri);
    }
    s.addToPlayList(list, addList)
} */