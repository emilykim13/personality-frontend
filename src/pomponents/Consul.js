import { useSelector } from 'react-redux'

const Consul = () => {
  const pState = useSelector(state => state.personalitiesState)
  const consul = pState.personalities[11]
      return (
        <div className="App">
          <img className="p-band" src={consul.image_two}></img>
          <h1>{consul.name}</h1>
          <h2>{consul.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{consul.introduction}</p><br/>
          <p>{consul.intropp}</p><br/>
          <img className="p-avatar" src={consul.image}></img>
          <h4>{consul.firstheader}</h4><br/>
          <p>{consul.firstpp}</p><br/>
          <h4>{consul.secondheader}</h4><br/>
          <p>{consul.secondpp}</p><br/>
          <h4>{consul.thirdheader}</h4><br/>
          <p>{consul.thirdpp}</p><br/>
          <img className="p-band" src={consul.image_three}></img>
          <h4>{consul.fourtheader}</h4><br/>
          <p>{consul.fourthpp}</p><br/>
          <h4>{consul.fifthheader}</h4><br/>
          <p>{consul.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Consul;