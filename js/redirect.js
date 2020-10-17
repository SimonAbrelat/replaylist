(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (!urlParams.has('access_token')) {
        location.assign("/")
    }
    const tok = urlParams.get('access_token');
    const tok_type = urlParams.get('token_type');
    const expires = urlParams.get('expires_in');
    console.log(tok);
})()