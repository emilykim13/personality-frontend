import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const MyProfile = (props) => {
  const dispatch = useDispatch()

  const myProfiles = useSelector(state => state.usersState.current_user.profiles)
  const myAccount = useSelector(state => state.usersState.current_user.user)
  const myRawTests = useSelector(state => state.usersState.current_user.tests)
  console.log(myRawTests)
  const myTests = myRawTests.filter(test => test.results !== null)
  const lastIndex = myTests.length - 1

  const prsnts = useSelector(state => state.personalitiesState.personalities)
  console.log(prsnts)
  const filteredPersonality = prsnts.filter(p => p.letters === myTests[lastIndex].results)[0]
  console.log(filteredPersonality)
  const linkyloo = `/${filteredPersonality.name.toLowerCase()}`
  // let lastProfile = myProfiles.length > 0 ? myProfiles.length - 1 : null
    // console.log(myAccount)
    return (
        <div className="App">
          <h1>Ni haody, {myAccount.name}!</h1>
          <p>Username: {myAccount.name}</p>
          <p>{myAccount.email}</p>
          {/* <h1> Your latest personality type: {myProfiles[lastProfile].personality_letters} aka the {myProfiles[lastProfile].personality_character} </h1> */}
          <h1> Your latest personality type: {myTests[lastIndex].results}</h1>
          <img onClick={() => props.history.push(linkyloo)} className="p-avatar" src={filteredPersonality.image}></img>
          <p>{filteredPersonality.introduction}</p>
          <p>{filteredPersonality.intropp}</p>
          <h1> You can read more about <Link to={linkyloo}>{filteredPersonality.name}s</Link> and other personality types <Link to="/personalities">here</Link>.</h1>
          <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        </div>
      )
  }

  export default MyProfile;
  