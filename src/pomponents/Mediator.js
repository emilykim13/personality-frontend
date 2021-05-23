import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Mediator = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - mediator")}
  const mediator = pState.personalities[5]

      return (
        <div>
          <img className="p-band" src={mediator.image_two}></img>
          <h1>{mediator.name}</h1>
          <h2>{mediator.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p>{mediator.introduction}</p><br/>
          <p>{mediator.intropp}</p><br/>
          <img className="p-avatar" src={mediator.image}></img>
          <h4>{mediator.firstheader}</h4><br/>
          <p>{mediator.firstpp}</p><br/>
          <h4>{mediator.secondheader}</h4><br/>
          <p>{mediator.secondpp}</p><br/>
          <h4>{mediator.thirdheader}</h4><br/>
          <p>{mediator.thirdpp}</p><br/>
          <img className="p-band" src={mediator.image_three}></img>
          <h4>{mediator.fourtheader}</h4><br/>
          <p>{mediator.fourthpp}</p><br/>
          <h4>{mediator.fifthheader}</h4><br/>
          <p>{mediator.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Mediator;