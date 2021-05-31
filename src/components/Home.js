import React from 'react'

const Home = () => {
    return (
        <div>
          <header className="App">
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
            <p className="para-contain" >Extraversion is characterized by a preference to focus on the world outside the self. Extraverts are energized by social gatherings, parties and group activities. Extraverts are usually enthusiastic, gregarious and animated. Their communication style is verbal and assertive. Talking helps Extraverts think. They enjoy limelight.</p><br/>
            <p className="para-contain" >Introversion is characterized by a preference to focus on theinside world. Introverts are energized by spending time alone or with a small group. They find large group gatherings draining because they seek depth instead of breadth of relationships. Introverts process information internally. They are great listeners and think before talking.</p><br/>
            <h2>Sensing vs. Intuition</h2>
            <p className="para-contain" >Sensors focus on the present. They are “here and now” people. They are factual and process information through the five senses. They see things as they are because they are concrete and literal thinkers. They trust what is certain. Sensors value realism and common sense. They especially like ideas with practical applications.</p><br/>
            <p className="para-contain" >Intuitive people live in the future and are immersed in the world of possibilities. They process information through patterns and impressions. Intuitive people value inspiration and imagination. They gather knowledge by reading between the lines. Their abstract nature attracts them toward deep ideas and concepts. They see the “big picture”.</p><br/>
            <h2>Thinking vs. Feeling</h2>
            <p className="para-contain" >Thinking people are objective. They make decisions based on facts. They are ruled by their head instead of their heart. Thinking people judge situations and others based on logic. They value truth over tact and can easily identify flaws. They are critical thinkers and oriented toward problem solving. Thinking does not mean a person is without emotion.</p><br/>
            <p className="para-contain" >Feeling people are subjective. They make decisions based on principles and values. They are ruled by their heart instead of their head. Feeling people judge situations and others based on feelings and extenuating circumstances. They seek to please others and want to be appreciated. They value harmony and empathy.</p><br/>
            <h2>Judging vs. Perceiving</h2>
            <p className="para-contain" >Judging people think sequentially. They value order and organization. Their lives are scheduled and structured. Judging people seek closure and enjoy completing tasks. They take deadlines seriously. They work then they play. The Judging preference does not mean judgmental. Judging refers to how a person deals with day-to-day activities.</p><br/>
            <p className="para-contain" >Perceivers are adaptable and flexible. They are random thinkers who prefer to keep their options open. Perceivers thrive with the unexpected and are open to change. They are spontaneous and often juggle several projects at once. They enjoy starting a task better than finishing it. Deadlines are often merely suggestions. Perceivers play as they work.</p><br/>
            <br/><br/><br/><br/><h5>Developer's Note</h5>
            <p className="para-contain">I created this web-app as my final project because I wanted to incorporate what I'm enjoy talking about (personality psychology) with my skills as a computer engineer. And although I majored in psychology, I do not support the test results anyone receieves as a real depiction of their personality. Most of my data is referenced from <a target="_blank" href="https://www.16personalities.com/">https://www.16personalities.com</a>. Their test strongly inspired my project and personality test. <strong>Take mine at your own risk </strong>¯\_(ツ)_/¯ </p><br/><br/><br/><br/>
          </body>
        </div>
    )
}

export default Home