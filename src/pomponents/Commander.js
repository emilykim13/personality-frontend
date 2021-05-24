import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Commander = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - commander")}
  const commander = pState.personalities[2]

      return (
        <div>
          <img className="p-band" src={commander.image_two}></img>
          <h1>{commander.name}</h1>
          <h2>{commander.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{commander.introduction}</p><br/>
          <p>{commander.intropp}</p><br/>
          <img className="p-avatar" src={commander.image}></img>
          <h4>{commander.firstheader}</h4><br/>
          <p>{commander.firstpp}</p><br/>
          <h4>{commander.secondheader}</h4><br/>
          <p>{commander.secondpp}</p><br/>
          <h4>{commander.thirdheader}</h4><br/>
          <p>{commander.thirdpp}</p><br/>
          <img className="p-band" src={commander.image_three}></img>
          <h4>{commander.fourtheader}</h4><br/>
          <p>{commander.fourthpp}</p><br/>
          <h4>{commander.fifthheader}</h4><br/>
          <p>{commander.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Commander;