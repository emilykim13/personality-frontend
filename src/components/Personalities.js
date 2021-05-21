import React from "react"
// import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"
import PersonalityCard from "./PersonalityCard.js"

const Personalities = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("Nope")}
      return (
        <div>
          <h1>Ni haody, this is my components/Personalities.js</h1>
          {/* {console.log(pState.personalities)} */}
          {pState.personalities.map(personality => <PersonalityCard personality={personality} key={personality.id}/>)}
        </div>
      )
  }
  
  export default Personalities;
  