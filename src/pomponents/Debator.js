import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Debator = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - debator")}
  const debator = pState.personalities[3]

      return (
        <div>
          <img className="p-band" src={debator.image_two}></img>
          <h1>{debator.name}</h1>
          <h2>{debator.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p>{debator.introduction}</p><br/>
          <p>{debator.intropp}</p><br/>
          <img className="p-avatar" src={debator.image}></img>
          <h4>{debator.firstheader}</h4><br/>
          <p>{debator.firstpp}</p><br/>
          <h4>{debator.secondheader}</h4><br/>
          <p>{debator.secondpp}</p><br/>
          <h4>{debator.thirdheader}</h4><br/>
          <p>{debator.thirdpp}</p><br/>
          <img className="p-band" src={debator.image_two}></img>
          <h4>{debator.fourtheader}</h4><br/>
          <p>{debator.fourthpp}</p><br/>
          <h4>{debator.fifthheader}</h4><br/>
          <p>{debator.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Debator;