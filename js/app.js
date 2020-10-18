var s = null;
var activePL = null;

function getRePlaylists(s) {
    let totalList = (async () => {
        return await s.getPlaylists()
    })();
    let ourList = [];
    for (let i = 0; i < totalList.length; i++) {
        tags = totalList[i].description.split("#",2)
        if (tags[0] == "replaylist") {
            ourList.push(totalList[i])
        }
    }
    return ourList;
}

function setPlaylists(playlists) {
    let options = document.getElementById("playlists");
    for (index in playlists) {
        let opt = document.createElement("option");
        opt.text = playlists[index].name;
        options.appendChild(opt);
    };
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