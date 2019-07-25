# recommendinator

## What is it?
a standalone server to do the recommendation functions in Spoofy but not embedded in an Android app

## What does it do?
not much currently

## What's it going to do?
1) the playlist-from-playlist generation that Spoofy does
2) other related functions as I think of them. The main focus is on Spotify playlist generation, recommendations and music discovery.

## Project contents and structure
The backend is a node/express server, frontend tbd. I want the api accessible for the sake of Spoofy but also the use of a simple web app for desktop use

## Spotify interactions and auth
All Spotify API endpoints require a token. For testing purposes, this can be acquired by via the Spotify developer console (although it will time out eventually).

## known limitations
* genres and seed genres are different. That is, the genres your music is tagged as can be far more specific than the seeds you can use in recommendation playlists ("melodic metalcore, deathcore, or screamo" vs "metal")