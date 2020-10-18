# replaylist

## Inspiration

Have you ever listened to an amazing radio station or queue on Spotify and wish you could have saved those songs? Was the process of rewinding song by song tedious and cumbersome? Do you wish you could add multiple songs to playlists at once?Don't you wish there was an easier way to access your listening history?  We know we have, and that's what gave us inspiration to build replaylist.

Spotify is one of the most widely used music streaming services, but it lacks various features we found essential. While Spotify keeps track of your listening history, there is no  way to access it aside from repeately rewrinding song-by-song! While this solution may be useful if you are wanting to find a song you listened to afew minuets ago, wanting to save a music session or queue is highly repetitive and innefiicent. 

We wanted to make Spotify a better tool for listening sessions, so users can save various sessions and have access to them whenever they want, rather than needing to rewrind for minuets to find a speicfic song. Users would get a customizeable approach to managing their listening history and deciding where to put their music, while also maintaining the individualized music Spotify recommends.

## What it does

Replaylist aims to reinvent how users interact with their music and how listening sessions are done. With replaylist, users can start listening sessions and at the end of the session, decide what songs to transfer to what playlist. Replaylist interacts with Spotify's API using user credentials attained through OAuth 2 to obtain and display the user's listening history.

## How we built it

The core of the project's backend are Spotify's Web APIs. They offer many of the tools required to obtain access to a user's public and private playlists without intruding on their privacy, while also allowing replaylist to transfer songs in mass. 

On the other hand, the frontend is built using the classic trio of web development: HTML, CSS, and Javascript. The content and website was hosted using netlify's web hosting services to pull from our GitHub repository. 

## Challenges we ran into

The first challenge we ran into was obtaining the proper credientials to make calls to Spotify's Web API. Having a solid understanding of this API was essential to setting up a secure standard for users to interact with our website, OAuth 2. From there, we initially ran into issues with various permissions and domains, but they were quickly sorted out by continually refferencing the amazing documentation Spotify provides.

However, the biggest challenge we ran into was designing a user-friendly way to interact with replaylist and deciding on expected behaviors. Multiple decisions were made as to how replaylist would decide which playlists are avaliable to write to, how replaylist will notify users that their session is going to expire, and how replaylist will give users the power to decide what happens to their playlists. We designed a framework where users can indicate playlists open to modification using a special tag in the playlist's description. From there, after having started and completed a listening session, users can move as many songs as they want over to any number of the selected playlists for future listening. 

## Accomplishments that we're proud of

## What we learned

## What's next for replaylist?

## usage
Log into Spotify account to access replaylist. The web app displays the most recent 50 songs in listening history. Users can select desired history sections and add them to user-defined playlists.

## Spotify API




set up fetch system to call Spotify API using OAuth2
retrieves user history
modifies playlists

product allows users to have backlog of listening history to then add to user-defined playlists
choose what playlist to add

select songs from past history and add to playlist of choice
