import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Executive = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - executive")}
  const executive = pState.personalities[10]

      return (
        <div>
          <img className="p-band" src={executive.image_two}></img>
          <h1>{executive.name}</h1>
          <h2>{executive.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p>{executive.introduction}</p><br/>
          <p>{executive.intropp}</p><br/>
          <img className="p-avatar" src={executive.image}></img>
          <h4>{executive.firstheader}</h4><br/>
          <p>{executive.firstpp}</p><br/>
          <h4>{executive.secondheader}</h4><br/>
          <p>{executive.secondpp}</p><br/>
          <h4>{executive.thirdheader}</h4><br/>
          <p>{executive.thirdpp}</p><br/>
          <img className="p-band" src={executive.image_two}></img>
          <h4>{executive.fourtheader}</h4><br/>
          <p>{executive.fourthpp}</p><br/>
          <h4>{executive.fifthheader}</h4><br/>
          <p>{executive.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Executive;