import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Defender = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - defender")}
  const defender = pState.personalities[9]

      return (
        <div className="App">
          <img className="p-band" src={defender.image_two}></img>
          <h1>{defender.name}</h1>
          <h2>{defender.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{defender.introduction}</p><br/>
          <p>{defender.intropp}</p><br/>
          <img className="p-avatar" src={defender.image}></img>
          <h4>{defender.firstheader}</h4><br/>
          <p>{defender.firstpp}</p><br/>
          <h4>{defender.secondheader}</h4><br/>
          <p>{defender.secondpp}</p><br/>
          <h4>{defender.thirdheader}</h4><br/>
          <p>{defender.thirdpp}</p><br/>
          <img className="p-band" src={defender.image_three}></img>
          <h4>{defender.fourtheader}</h4><br/>
          <p>{defender.fourthpp}</p><br/>
          <h4>{defender.fifthheader}</h4><br/>
          <p>{defender.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Defender;