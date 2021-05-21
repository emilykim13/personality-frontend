import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Entreprenuer = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - entreprenuer")}
  const entreprenuer = pState.personalities[14]

      return (
        <div>
          <img className="p-band" src={entreprenuer.image_two}></img>
          <h1>{entreprenuer.name}</h1>
          <h2>{entreprenuer.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p>{entreprenuer.introduction}</p><br/>
          <p>{entreprenuer.intropp}</p><br/>
          <img className="p-avatar" src={entreprenuer.image}></img>
          <h4>{entreprenuer.firstheader}</h4><br/>
          <p>{entreprenuer.firstpp}</p><br/>
          <h4>{entreprenuer.secondheader}</h4><br/>
          <p>{entreprenuer.secondpp}</p><br/>
          <h4>{entreprenuer.thirdheader}</h4><br/>
          <p>{entreprenuer.thirdpp}</p><br/>
          <img className="p-band" src={entreprenuer.image_two}></img>
          <h4>{entreprenuer.fourtheader}</h4><br/>
          <p>{entreprenuer.fourthpp}</p><br/>
          <h4>{entreprenuer.fifthheader}</h4><br/>
          <p>{entreprenuer.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Entreprenuer;