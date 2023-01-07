---
id: 2
datePublished: 1
title: 'Adventurer Handbook'
link: 'https://adventurerhandbook-alpha.netlify.app/'
imgSrc: '/assets/genshin-handbook.webp'
github: 'https://github.com/donovangomez/fighting-game-resources'
stack: 'NextJS / Chakra UI / Supabase'
---
# Adventurer Handbook
A Genshin Impact companion with the purpose of showing which characters are farmable each day of the week. Characters and weapons change everyday at 12AM PST.

## Project Inspiration
Genshin Impact has been one of my favorite video games in the last few years. Being a mobile game however, means that some contact is time gated to keep the player playing the game. Building a character requires materials that are available only on certain days of the week, with Sunday being the day when everything is available. As the game grows the more clicks it'll take to figure out which characters you can build so before my session I figured it would be useful to know which characters I want to build for that day.

## Tech stack
The tech is predominately NextJS and Supabase on the backend. NextJS is phenomenal to work with if the developer has used React before and Supabase is really easy to get a database up and running quickly. Instead of going static, I used a framework because the characters and weapons will change everyday. There is an API for Genshin but it didn't have the info I wanted with the days the materials would be available so I decided to input every character in Supabase.