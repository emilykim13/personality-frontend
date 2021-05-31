import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Protagonist = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  // {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - protagonist")}
  const protagonist = pState.personalities[6]

      return (
        <div className="App">
          <img className="p-band" src={protagonist.image_two}></img>
          <h1>{protagonist.name}</h1>
          <h2>{protagonist.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{protagonist.introduction}</p><br/>
          <p>{protagonist.intropp}</p><br/>
          <img className="p-avatar" src={protagonist.image}></img>
          <h4>{protagonist.firstheader}</h4><br/>
          <p>{protagonist.firstpp}</p><br/>
          <h4>{protagonist.secondheader}</h4><br/>
          <p>{protagonist.secondpp}</p><br/>
          <h4>{protagonist.thirdheader}</h4><br/>
          <p>{protagonist.thirdpp}</p><br/>
          <img className="p-band" src={protagonist.image_three}></img>
          <h4>{protagonist.fourtheader}</h4><br/>
          <p>{protagonist.fourthpp}</p><br/>
          <h4>{protagonist.fifthheader}</h4><br/>
          <p>{protagonist.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Protagonist;