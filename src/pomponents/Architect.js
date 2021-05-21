// // import { Redirect } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux'
// import { getPersonalities } from "../actions/getPersonalities"
// import PersonalityCard from "./PersonalityCard.js"

// const Personalities = () => {
//   const pState = useSelector(state => state.personalitiesState)
//   const dispatch = useDispatch()

//   {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - architect")}

//       return (
//         <div>
//           <h1>Ni haody, this is my pomponents/Architect.js</h1>
//           {pState.personalities.map(personality => <PersonalityCard personality={personality} key={personality.id}/>)}
//         </div>
//       )
//   }
  
//   export default Personalities;
  