import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Logistician = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - logistician")}
  const logistician = pState.personalities[8]

      return (
        <div className="App">
          <img className="p-band" src={logistician.image_two}></img>
          <h1>{logistician.name}</h1>
          <h2>{logistician.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{logistician.introduction}</p><br/>
          <p>{logistician.intropp}</p><br/>
          <img className="p-avatar" src={logistician.image}></img>
          <h4>{logistician.firstheader}</h4><br/>
          <p>{logistician.firstpp}</p><br/>
          <h4>{logistician.secondheader}</h4><br/>
          <p>{logistician.secondpp}</p><br/>
          <h4>{logistician.thirdheader}</h4><br/>
          <p>{logistician.thirdpp}</p><br/>
          <img className="p-band" src={logistician.image_three}></img>
          <h4>{logistician.fourtheader}</h4><br/>
          <p>{logistician.fourthpp}</p><br/>
          <h4>{logistician.fifthheader}</h4><br/>
          <p>{logistician.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Logistician;