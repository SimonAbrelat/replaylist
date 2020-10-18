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

function setOptions(arr, id) {
    let options = document.getElementById("playlists");
    for (index in arr) {
        let opt = document.createElement("option");
        opt.text = arr[index].name;
        options.appendChild(opt);
    };    
}

function setPlaylists(arr) {
    setOptions(arr, "playlists")
    /*
    let options = document.getElementById("playlists");
    for (index in arr) {
        let opt = document.createElement("option");
        opt.text = arr[index].name;
        options.appendChild(opt);
    };
    */
}

function setHistory(arr) {
    setOptions(arr, "historys")
    /*
    let options = document.getElementById("histories");
    for (index in arr) {
        let opt = document.createElement("option");
        opt.text = arr[index].name;
        options.appendChild(opt);
    };    
    */
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
}
*/