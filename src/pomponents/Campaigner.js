import { useSelector } from 'react-redux'

const Campaigner = () => {
  const pState = useSelector(state => state.personalitiesState)
  const campaigner = pState.personalities[7]
      return (
        <div className="App">
          <img className="p-band" src={campaigner.image_two}></img>
          <h1>{campaigner.name}</h1>
          <h2>{campaigner.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{campaigner.introduction}</p><br/>
          <p>{campaigner.intropp}</p><br/>
          <img className="p-avatar" src={campaigner.image}></img>
          <h4>{campaigner.firstheader}</h4><br/>
          <p>{campaigner.firstpp}</p><br/>
          <h4>{campaigner.secondheader}</h4><br/>
          <p>{campaigner.secondpp}</p><br/>
          <h4>{campaigner.thirdheader}</h4><br/>
          <p>{campaigner.thirdpp}</p><br/>
          <img className="p-band" src={campaigner.image_three}></img>
          <h4>{campaigner.fourtheader}</h4><br/>
          <p>{campaigner.fourthpp}</p><br/>
          <h4>{campaigner.fifthheader}</h4><br/>
          <p>{campaigner.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Campaigner;