var s = null;
var activePL = null;

async function getRePlaylists() {
    let totalList = await s.getPlaylists();
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
    playlists = await getRePlaylists()
    let options = document.getElementById("playlists");
    for (x in playlists) {
        let opt = document.createElement("option");
        opt.text = x.name;
        options.add(opt, options[0]);
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