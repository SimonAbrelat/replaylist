(() => {
    const queryString = window.location.href;
    arr = queryString.split("#")[1].split("&");
    if (arr.length < 3) {
        alert("Login Failed.")
    }
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    if (!urlParams.has('access_token')) {
        //alert("Login failed.")
        //location.assign("https://simonabrelat.github.io/replaylist")
    }

    sessionStorage.setItem("tok", arr[0].split("=")[1]);
    sessionStorage.setItem("tok_type", arr[1].split("=")[1]);
    sessionStorage.setItem("expires", arr[2].split("=")[1]);

    //location.assign("https://simonabrelat.github.io/replaylist/recorder.html")
})()