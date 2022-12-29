import React, {useState, useEffect} from 'react'
import { sleep } from "../helpers"

const likes = [
    "burgers",
    "pizza",
    "chicken",
    "in n out"
  ];
  
  

export default function Likes() {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      const displayIsh = () => {
        setInterval(shuffle(likes), 100);
      }
      
      {shuffle(likes)}

    // function shuffleLikes() {
    //     setInterval(() => {
    //         {shuffle(likes)}
    //         console.log(likes[0])
    //     }, 1000)
    // }
   
    useEffect(() => {

      let running = true

        void (async () => {
            while (running) {
              await sleep(3000)
              setVisible(false)
              await sleep(500)
              setIndex((index) => index + 1)
              await sleep(500)
              setVisible(true)
            }
          })()

          return () => {
            running = false
          }
    }, [])

  return(
    <div>
      {displayIsh}
        <span
        class={`inline-block text-3xl transition ${
          visible ? "ease-out opacity-100" : "ease-in translate-y-2 opacity-0"
        }`}
      >

        {likes[index % likes.length]}
      </span>
    </div>
  )
}
