import { useSelector } from 'react-redux'

const Logician = () => {
  const pState = useSelector(state => state.personalitiesState)
  const logician = pState.personalities[1]
      return (
        <div className="App">
          <img className="p-band" src={logician.image_two}></img>
          <h1>{logician.name}</h1>
          <h2>{logician.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{logician.introduction}</p><br/>
          <p>{logician.intropp}</p><br/>
          <img className="p-avatar" src={logician.image}></img>
          <h4>{logician.firstheader}</h4><br/>
          <p>{logician.firstpp}</p><br/>
          <h4>{logician.secondheader}</h4><br/>
          <p>{logician.secondpp}</p><br/>
          <h4>{logician.thirdheader}</h4><br/>
          <p>{logician.thirdpp}</p><br/>
          <img className="p-band" src={logician.image_three}></img>
          <h4>{logician.fourtheader}</h4><br/>
          <p>{logician.fourthpp}</p><br/>
          <h4>{logician.fifthheader}</h4><br/>
          <p>{logician.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Logician;