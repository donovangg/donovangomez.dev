---
title: Conditional Rendering in React and Vue
date: 2023-09-14
imgSrc: "/assets/reactvue.webp"
description: How React and Vue handle conditional rendering
---

For as long as I have been trying to get into tech, it's been recommended by a lot of people to learn React. On every YouTube video, Reddit Post and Tweet, I've seen people say React will help you get hired and grow your career. It's around this time in 2020 that Honeypot Dev released it's [Vue Documentary](https://youtu.be/OrxmtDw4pVI?si=hoV5YcW1fbY9pyX1) (They've also released a [React doc](https://www.youtube.com/watch?v=8pDqJVdNa44) earlier this year.) I thought Evan was so cool and loved the passion shown by all the devs. Due to the doc, I wanted to try out Vue myself. I held off and decided to dive heavily into the React ecosystem to be more employable. Fast forward to 2023, and I still have no job and have essentially given up my job search. I still love coding though, so now I'm diving in.

I wanted to learn how to add functionality with both Vue and React. Rendering elements conditionally is something a framework does easily. However, React and Vue do it differently.

### Conditional rendering in React.

If you've worked with JavaScript you most likely will be familiar with [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) and `if` statements. Rendering things in React looks like JavaScript, probably because it is JavaScript lol.

```react
function App() {
  const isSandwich = true;

  return (
    <div className="App">
      {isSandwich
       ? <p>A hotdog is a sandwich</p>
       :<p>NO its not a sando</p>}
    </div>
  );
}

export default App;


```

If your condition is true, in this case isSandwich, `<p>Yes the Hotdog is a sandwich</p>` will be rendered. If not the other `<p>` tag after the `:` will render.

![Big glizzy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vlegqcetlohsltm0apct.png)

### Conditional Rendering in Vue

In Vue you have access to [Vue Directives](https://vuejs.org/api/built-in-directives.html#v-else-if) which are like HTML attributes that allow us to manipulate DOM elements. The ones that are of important to us right now are: `v-if`, `v-else` and `v-show`. They work exactly like they would you would expect.

```vue
<template>
  <p v-show="isSandwich">Hotdog is a sandwich</p>
</template>

<script setup>
import { ref } from "vue";
let isSandwich = ref(true);
</script>
```

Vue has an additional directive for this use case called `v-show`.
For this example lets make `isSandwich` false so it won't be visible.

```vue
<template>
  <p v-show="isSandwich">Hotdog is a sandwich</p>
</template>

<script setup>
import { ref } from "vue";
let isSandwich = ref(false);
</script>
```

The `<p>` tag won't be visible, but we should take a look at our developer tools. It looks like that it was actually rendered in our DOM but with a property of `display: none`.

![v-show renders a DOM element with display:none](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j4t9252s8urjpq8d5hag.png)

So which one should you use? Luckily the Vue docs have a [section just for this question.](https://vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show) The tldr straight from the docs is:

> Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render costs. So prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.

Conditionally rendering something in Vue and React makes sense. You might prefer one over the other but, they're both fun to work with for now.
