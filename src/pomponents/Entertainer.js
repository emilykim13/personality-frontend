import { useSelector } from 'react-redux'

const Entertainer = () => {
  const pState = useSelector(state => state.personalitiesState)
  const entertainer = pState.personalities[15]
      return (
        <div className="App">
          <img className="p-band" src={entertainer.image_two}></img>
          <h1>{entertainer.name}</h1>
          <h2>{entertainer.letters}</h2>
          <h1><strong>Introduction</strong></h1>
          <p className="p-p-text" >{entertainer.introduction}</p><br/>
          <p>{entertainer.intropp}</p><br/>
          <img className="p-avatar" src={entertainer.image}></img>
          <h4>{entertainer.firstheader}</h4><br/>
          <p>{entertainer.firstpp}</p><br/>
          <h4>{entertainer.secondheader}</h4><br/>
          <p>{entertainer.secondpp}</p><br/>
          <h4>{entertainer.thirdheader}</h4><br/>
          <p>{entertainer.thirdpp}</p><br/>
          <img className="p-band" src={entertainer.image_three}></img>
          <h4>{entertainer.fourtheader}</h4><br/>
          <p>{entertainer.fourthpp}</p><br/>
          <h4>{entertainer.fifthheader}</h4><br/>
          <p>{entertainer.fifthpp}</p><br/>
        </div>
      )
  }
  
  export default Entertainer;