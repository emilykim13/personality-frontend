import { useSelector, useDispatch } from 'react-redux'
import { getPersonalities } from "../actions/getPersonalities"

const Virtuoso = () => {
  const pState = useSelector(state => state.personalitiesState)
  const dispatch = useDispatch()
  // {!pState.loadPersonalities ? dispatch(getPersonalities) : console.log("nope - virtuoso")}
  const virtuoso = pState.personalities[12]

      return (
        <div className="App">
          <img className="p-band" src={virtuoso.image_two}></img>
          <h1>{virtuoso.name}</h1>
          <h2>{virtuoso.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{virtuoso.introduction}</p><br/>
          <p>{virtuoso.intropp}</p><br/>
          <img className="p-avatar" src={virtuoso.image}></img>
          <h4>{virtuoso.firstheader}</h4><br/>
          <p>{virtuoso.firstpp}</p><br/>
          <h4>{virtuoso.secondheader}</h4><br/>
          <p>{virtuoso.secondpp}</p><br/>
          <h4>{virtuoso.thirdheader}</h4><br/>
          <p>{virtuoso.thirdpp}</p><br/>
          <img className="p-band" src={virtuoso.image_three}></img>
          <h4>{virtuoso.fourtheader}</h4><br/>
          <p>{virtuoso.fourthpp}</p><br/>
          <h4>{virtuoso.fifthheader}</h4><br/>
          <p>{virtuoso.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Virtuoso;