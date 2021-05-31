import React from "react"
import { useSelector } from 'react-redux'
import PersonalityCard from "./PersonalityCard.js"

const Personalities = () => {
  const pState = useSelector(state => state.personalitiesState)
      return (
        <div>
          <h1>Ni haody, this is my components/Personalities.js</h1>
          {pState.personalities.map(personality => <PersonalityCard personality={personality} key={personality.id}/>)}
        </div>
      )
  }
  
  export default Personalities;
  