# Dare Drop Streaming Frontend

This is an adaptive Dare Drop Streaming web-app, created on terms of the Dare
Drop test task. It allows to watch after new streamers and their ratings in real
time, add favorite streamers on server, vote for them, find some info about
them.

## Website content

### Homepage

The App starts with homepage with video background and greeting message for any
new user. It also contains button, that leads to the streamers page.

![Homepage](./src/assets/images/readme/01_homepage.png)

### Sreamers

Streamers page contains main functional of the web-app. It starts with the form,
which allows to add new streamer to the platform. After the form submition new
streamer will be added to the list below.

List of streamers is renewing in real time. Users can filter streamers by
streaming platform, activity genre, activity note creation date (newest/oldest),
or upvotes/downvotes rate.

Under the list users can found controllers, allowing easily move through filtred
results from page to page.

![Streamers list](./src/assets/images/readme/02_streamers_list.png)

Each streamer's card includes streamer's name, activity genre, prefered
platform, and number of current upvotes/downvotes renewed in real time. It also
indicates 5 star based rating, calculated basing on votes ratio. At the end of
each card there is a button link leading on the streamer's personal page.

### Sreamer page

Streamer page provides user with info about streamer, giving streamer's name,
photo, activity genre and description, prefered genre, and general rating (not
renewed in real time).

![Streamer page](./src/assets/images/readme/03_streamer_page.png)

### Additional features

Each pages header includes toggle theme button allowing users choose prefered
color mode.

![Dark mode](./src/assets/images/readme/04_dark_mode.png)

## Deploy

The frontend part of the web-app is deployed on gh-pages. Live version of the
app is avaliable at
[link](https://milosska.github.io/daredrop-streaming-frontend)

```javascript
'https://milosska.github.io/daredrop-streaming-frontend';
```

## Technology stack

Frontend part of the web-app was created using indicated tech stack:

<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
<code><img height="50" src="https://socket.io/images/logo.svg" alt="SocketIO" title="SocketIO" /></code>
<code><img height="50" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" title="styled-components" /></code>
<code><img height="50" src="https://avatars.githubusercontent.com/u/32372333?s=48&v=4" alt="axios" title="axios" /></code>
