<img src="./res/logo.png" alt="replaylist logo" width="200">

# replaylist

Use replaylist [here][2]!

[2]:https://replaylists.netlify.app/
## Inspiration

Have you ever listened to an amazing radio station or queue on Spotify and wish you could have saved those songs? Was the process of rewinding song by song tedious and cumbersome? Do you wish you could add multiple songs to playlists at once? Don't you wish there was an easier way to access your listening history?  We know we have, and that's what inspired us to build replaylist.

A fetch system set up calls the [Spotify API][1] using OAuth2 to retrieve user listening history and modify playlists. The user then interacts with the backlog of listening history and selects songs to add to a playlist of choice.Spotify is one of the most widely used music streaming services, but it lacks various features we found essential. While Spotify keeps track of your listening history, there is no way to access it aside from repeatedly rewinding song-by-song! While this solution may be useful if you are wanting to find a song you listened to a few minutes ago, wanting to save a music session or queue is highly repetitive and inefficient. 

## roadmap
Future release ideas include various filtering and sorting capabilites.
* implement advanced automatic and user-defined filtering
* sort music by various audio features in Spotify's API
* expand usage of custom tags

## authors
Simon Abrelat, David Gordon, Melissa Hernandez, Taleb Hirani

ʕ•ᴥ•ʔ

[1]:https://developer.spotify.com/documentation/web-api/
On the other hand, the frontend is built using the classic trio of web development: HTML, CSS, and JavaScript. We implemented native JavaScript and made this application entirely client side, reducing many risks associated with external services such as replaylist. The content and website were hosted using Netlify's web hosting services to pull from our GitHub repository. 

## Challenges we ran into

The first challenge we ran into was obtaining the proper credentials to make calls to Spotify's Web API. Having a solid understanding of this API was essential to set up a secure standard for users to interact with our website, OAuth 2. From there, we initially ran into issues reguarding various permissions and domains, but they were quickly sorted out by continually referencing the amazing documentation Spotify provides.

However, the biggest challenge we ran into was designing a user-friendly way to interact with replaylist and deciding on expected behaviors. Multiple decisions were made as to how replaylist would decide which playlists are available to write to, how replaylist will notify users that their session is going to expire, and how replaylist will give users the power to decide what happens to their playlists. We designed a framework where users can indicate playlists open to modification using a special tag in the playlist's description. From there, after having started and completed a listening session, users can move as many songs as they want over to any number of the selected playlists for future listening. 

## Accomplishments that we're proud of

We are very proud of the user experience we can provide users and the seamless integration with Spotify. We are also very proud of the execution of the idea, as we all worked hard to build the most robust application based on our initial idea. The UI feels very modern and intuitive, giving users a very enjoyable experience while using our product.

## What we learned

Most of the team members have not previously used Spotify's Web API, and quickly picking up a new API is a very important skill to have in web development. Everyone also learned how to integrate OAuth 2 with this API and send HTTP requests and parse JSON responses. 

## What's next for replaylist?

The most important feature we are wanting to implement is auto filtering and sorting of music. Using Spotify's API, music can automatically be sorted using various audio features such as danceability, tempo, energy, acoustics, etc. Using this and our custom tags implementation discussed earlier, users can easily define how to sort listening sessions so they can focus less on where their music is going and more on what to listen to next.
