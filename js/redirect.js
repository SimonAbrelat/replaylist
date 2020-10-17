(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    if (!urlParams.has('access_token')) {
        location.assign("https://simonabrelat.github.io/replaylist")
    }
    const tok = urlParams.get('access_token');
    const tok_type = urlParams.get('token_type');
    const expires = urlParams.get('expires_in');
    console.log(tok);
    location.assign("https://simonabrelat.github.io/replaylist/recorder.html")
})()