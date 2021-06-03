import React from "react"
import { useSelector } from 'react-redux'
import PersonalityCard from "./PersonalityCard.js"

const Personalities = () => {
  const pState = useSelector(state => state.personalitiesState)
      return (
        <div>

          <h1 className="para-contain">There's 16 Personality Types! Check them out by clicking on their avatars!</h1>
        <div className="contain-flex">
          <br/><br/>
          {pState.personalities.map(personality => <PersonalityCard personality={personality} key={personality.id}/>)}
        </div>
        </div>
      )
  }
  
  export default Personalities;
  