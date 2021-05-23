import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { getPersonalities } from "../actions/getPersonalities"

const Architect = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - architect")}
  const architect = pState.personalities[0]
//   {console.log(architect)}

      return (
        <div>
          <img className="p-band" src={architect.image_two} ></img>
          <h1>{architect.name}</h1>
          <h2>{architect.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p>{architect.introduction}</p><br/>
          <p>{architect.intropp}</p><br/>
          <img className="p-avatar" src={architect.image}></img>
          <h4>{architect.firstheader}</h4><br/>
          <p>{architect.firstpp}</p><br/>
          <h4>{architect.secondheader}</h4><br/>
          <p>{architect.secondpp}</p><br/>
          <h4>{architect.thirdheader}</h4><br/>
          <p>{architect.thirdpp}</p><br/>
          <img className="p-band" src={architect.image_three}></img>
          <h4>{architect.fourtheader}</h4><br/>
          <p>{architect.fourthpp}</p><br/>
          <h4>{architect.fifthheader}</h4><br/>
          <p>{architect.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Architect;