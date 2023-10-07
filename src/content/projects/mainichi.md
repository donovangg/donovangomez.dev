---
id: 3
datePublished: 2023-05-01
title: "Mainichi"
description: "Track anime airing daily"
link: "https://mainichi-anime.vercel.app/"
imgSrc: "/assets/mainichi.png"
github: "https://github.com/donovangomez/mainichi"
stack:
  [
    { name: "NextJS", logo: "/assets/nextjs-logo.svg" },
    { name: "TailwindCSS", logo: "/assets/tailwind-logo.svg" },
    { name: "Firebase", logo: "/assets/firebase-logo.svg" },
  ]
---

<section class="md:flex">
<div>
<h1 class="text-5xl mt-14">Mainichi</h1>
<p class="text-xl my-4">Track what anime is airing in Japan. Keep track of what you're watching this season.</p>
</div>
<div class="pl-4">
  <img src="/assets/mainichi.png" />
</div>
</section>

<section class="py-8">
  <h2 class="text-4xl my-4">Project Inspiration</h2>
   <p class="text-xl my-4">
  I'm one of the people that view anime seasonally. If there's a show that interests me that season I definitely take a look. If there isn't something that interests me, than I look what's airing that season and see if something interests me. Back in the day this was done by using charts and sometimes they were difficult to read. I wanted to make something simple and streamlined. Here is what anime is airing on this day. The purpose of this site was to make things simple, not overload the user with anime that isn't airing that season.
  </p>
</section>

<section class="pb-44">
   <div>
     <h2 class="text-4xl">Tech Stack</h2>
   </div>
   <div class="">
   <div class="flex gap-2 py-6">
     <img width="100" src="/assets/firebase-logo.svg" />
     <img width="100" src="/assets/nextjs-logotype-dark-background.svg"/>
     <img width="100" src="/assets/tailwind-logo.svg"/>
   </div>
   <div>
     <p class="text-xl">The tools of choice were NextJS, TailwindCSS and Firebase. I bootstrapped the project with the <a class="text-purple-600 hover:text-purple-400 transition-all duration-75" href="https://create.t3.gg/" target="_blank"  rel="noreferrer">T3 Stack</a> but I didn't use everything included. The best thing about the T3 stack is the flexibility and type safety. So even though I did&#39;t use an ORM or TRPC, I still got the benefit of everything else being setup and configured. </p>
   </div>
   </div>
      <figure class="py-4">
       <img width="100%" src="/assets/t3-init.png" alt="t3 stack options" />
       <figcaption class="text-center text-xl">T3 Stack Options</figcaption>
      </figure>
    <h3 class="text-3xl py-2">NextJS and Tailwind</h3>
    <p class="text-xl pb-6">NextJS and Tailwind is just the way I normally develop. Recently the official React docs even recommended on using NextJS as opposed to the old Create React App. Tailwind is just normally how I use to style my react projects. Once I got used to the utility classes I noticed how much faster I can style things. The best part is that Tailwind isn&#39;t part of a style system like a Material UI or Bootstrap. Everything can be custom, which is a huge plus.</p>
  
  <h3 class="text-3xl py-2">The Jikan API</h3>
     <p class="text-xl pb-6">Data for anime all came from the Jikan API. It is a lot easier to use compared to the Anilist api which I have used for a project similar to this. However Anilist relied on GraphQL which was great for choosing the payload but I didn&#39;t know what queries were available. The docs for Jikan were great.</p>
     <h3 class="text-3xl py-2">Firebase Suite</h3>
     <p class="text-xl">For authentication I used Next Auth when first deploying than tried out Clerk dev. Both were a great experience, Clerkdev especially. However Clerk wasn&#39; compatible with a vercel.app domain because you have to configure routes on deployment. so once I picked Firebase for Firestore, moving auth to Firebase just made sense.</p>
</section>
