import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Adventurer = (props) => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - adventurer")}
  const adventurer = pState.personalities[13]

  return (
    <div className="App">
          <img className="p-band" src={adventurer.image_two}></img>
          <h1>{adventurer.name}</h1>
          <h2>{adventurer.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text">{adventurer.introduction}</p><br/>
          <p >{adventurer.intropp}</p><br/>
          <img className="p-avatar" src={adventurer.image}></img>
          <h4>{adventurer.firstheader}</h4><br/>
          <p>{adventurer.firstpp}</p><br/>
          <h4>{adventurer.secondheader}</h4><br/>
          <p>{adventurer.secondpp}</p><br/>
          <h4>{adventurer.thirdheader}</h4><br/>
          <p>{adventurer.thirdpp}</p><br/>
          <img className="p-band" src={adventurer.image_three}></img>
          <h4>{adventurer.fourtheader}</h4><br/>
          <p>{adventurer.fourthpp}</p><br/>
          <h4>{adventurer.fifthheader}</h4><br/>
          <p>{adventurer.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Adventurer;