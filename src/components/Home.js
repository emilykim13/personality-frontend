import React from 'react'
import { Redirect, Link } from "react-router-dom"

const Home = (props) => {
  console.log("home")
    return (
        <div>
          <header className="App">
            {/* <img className="img-band" src="https://live-production.wcms.abc-cdn.net.au/ec9de9743a21adc30a3716cb91347c85?impolicy=wcms_crop_resize&cropH=1069&cropW=1898&xPos=16&yPos=0&width=862&height=485"></img><br/><br/> */}
            <h1>Welcome to WhoRU!</h1>
            <h5>A personality web-app created by Emily Nguyen</h5>
          </header>
          <body className="App">
            <h2>Introduction</h2>
            <p >Ever wonder what personality is?</p>

            <img className="img-band" src="https://i.ytimg.com/vi/dcsc_EsJmsA/maxresdefault.jpg"></img><br/><br/>
            <p className="para-contain">It's a lot of things. It's not the easiest object to define, but according to the Myers-Briggs personality test there are 4 overwhelming prefences that every person has a varying degree of. </p><br/><br/>
            <h2> What exactly is the Myers-Briggs Type Indicator (MBTI)? </h2>
            <img className="para-contain" src="https://cdn.shopify.com/s/files/1/0100/5392/articles/Mouthpiece_VdayMeyersBriggs1.progressive.jpg?v=1571071731"></img><br/><br/><br/><br/>
            <p className="para-contain">Myers-Briggs Type Indicator (MBTI) is a personality test created by a family duo of mother and daugther, Isabel Briggs Myers and her mother, Katharine Cooks Briggs. The test is widely popular and to certain degrees has some valuable knowledge. However, there are many limitations that the Myers-Briggs test poses. Some of these limitations are well-known such as: re-test reliability, validity, and inability to capture a person's full personality. Really, there's a lot of fishy things about the Myers-Briggs test like for example how both Briggs and Myers aren't actual psychologists. Yeah shocking. But what's more shocking is how surprisingly decent the MBTI is at trying to find the scope of one's personality. Some of the strengths the Myers-Briggs has is how the test packs a lot of complexity, making it difficult for the person to answer neutrally. It's also, very minialistic. There's only 8 characteristics. Either you're an introvert or an extravert. It does however, lack the true depth of how no one is truly 100% extraverted. It puts a limit to the depth of personality and when it comes to these things, personality is not a one-sided conundrum where one side of the coin is heavier than the other. Personality is a spectrum and therefore, even someone who is 1% more extraverted could easily be flipped the next day.</p><br/><br/>

            <h2>Introversion vs. Extraversion</h2>
            <h2>Sensing vs. Intuition</h2>
            <h2>Thinking vs. Feeling</h2>
            <h2>Judging vs. Perceiving</h2>

            <br/><br/><br/><br/><h5>Developer's Note</h5>
            <p className="para-contain">I created this web-app as my final project because I wanted to incorporate what I'm enjoy talking about (personality psychology) with my skills as a computer engineer. And although I majored in psychology, I do not support the test results anyone receieves as a real depiction of their personality. Most of my data is referenced from <a target="_blank" href="https://www.16personalities.com/">https://www.16personalities.com</a>. Their test strongly inspired my project and personality test. <strong>Take mine at your own risk </strong>¯\_(ツ)_/¯ </p><br/><br/><br/><br/>
          </body>
        </div>
    )
}

export default Home