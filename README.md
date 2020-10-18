<img src="./res/logo.png" alt="replaylist logo" width="200">

# replaylist

[Click here][1] to use replaylist!

## usage
After a Spotify fire listening session, a user can capture the past radio or queue through replaylist -- a secure, static, and fully client end web app. A user can log into their Spotify account through the replaylist and push their listening history to a desired playlist. Added playlists are identified with a tagging system and modified securely without touching carefully curated user playlists.

## implementation
The frontend is hand-built with HTML, CSS, and JavaScript, hosted using Netlify and pulls from the GitHub repository. Native JavaScript makes this application entirely client side, reducing many risks associated with external services. A fetch system set up calls the [Spotify API][2] using OAuth2 to retrieve user listening history and modify playlists. The user then interacts with the backlog of listening history and selects songs to add to a playlist of choice.

## roadmap
Future release ideas include various filtering and sorting capabilites.
* implement advanced automatic and user-defined filtering
* sort music by various audio features in Spotify's API
* expand usage of custom tags

## authors
created with lots of love and coffee by
Simon Abrelat, David Gordon, Melissa Hernandez, Taleb Hirani

ʕ•ᴥ•ʔ

[1]:https://replaylists.netlify.app/
[2]:https://developer.spotify.com/documentation/web-api/
