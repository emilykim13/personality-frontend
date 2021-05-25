import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Advocate = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - advocate")}
  const advocate = pState.personalities[4]

      return (
        <div className="App">
          <img className="p-band" src={advocate.image_two}></img>
          <h1>{advocate.name}</h1>
          <h2>{advocate.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{advocate.introduction}</p><br/>
          <p>{advocate.intropp}</p><br/>
          <img className="p-avatar" src={advocate.image}></img>
          <h4>{advocate.firstheader}</h4><br/>
          <p>{advocate.firstpp}</p><br/>
          <h4>{advocate.secondheader}</h4><br/>
          <p>{advocate.secondpp}</p><br/>
          <h4>{advocate.thirdheader}</h4><br/>
          <p>{advocate.thirdpp}</p><br/>
          <img className="p-band" src={advocate.image_three}></img>
          <h4>{advocate.fourtheader}</h4><br/>
          <p>{advocate.fourthpp}</p><br/>
          <h4>{advocate.fifthheader}</h4><br/>
          <p>{advocate.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Advocate;