(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    if (!urlParams.has('access_token')) {
        //alert("Login failed.")
        //location.assign("https://simonabrelat.github.io/replaylist")
    }

    sessionStorage.setItem("tok", urlParams.get('access_token'));
    sessionStorage.setItem("tok_type", urlParams.get('token_type'));
    sessionStorage.setItem("expires", urlParams.get('expires_in'));

    //location.assign("https://simonabrelat.github.io/replaylist/recorder.html")
})()