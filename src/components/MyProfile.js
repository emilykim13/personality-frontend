import React from "react"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const MyProfile = (props) => {
  const testing = useSelector(state => state.usersState.current_user)
  const myAccount = useSelector(state => state.usersState.current_user.user)
  const myProfiles = (testing.profiles.length === 0) ? "berto" : testing.profiles 
  const myRawTests = (testing.tests.length === 0) ? "emers" : testing.tests
  const lastProfile = (myProfiles === "berto") ? console.log("note: no profile written yet -lastProfile") : myProfiles.length - 1 
  const currentProfile = (myProfiles === "berto") ? console.log("note: no profile written yet -currentProfile") :  myProfiles[lastProfile]
  const myTests = (myRawTests === "emers") ? console.log("note: no tests taken yet -myTests") : myRawTests.filter(test => test.results !== null) 
  const lastIndex = (myRawTests === "emers") ? console.log("note: no tests taken yet -lastIndex") : myTests.length - 1 
  const prsnts = useSelector(state => state.personalitiesState.personalities)
  const filteredPersonality = (myRawTests === "emers") ? console.log("note: no tests taken yet -filterPersonality") : prsnts.filter(p => p.letters === myTests[lastIndex].results)[0]
  console.log(testing)
  const linkyloo = (myRawTests === "emers") ? console.log("cannot get filteredPersonality - no test created yet") : `/${filteredPersonality.name.toLowerCase()}`

  if((myProfiles === "berto"))
  { return (
      <div className="App">
        <h1>Ni haody, {myAccount.name}!</h1>
        <p>Username: {myAccount.name}</p>
        <p>{myAccount.email}</p>
        <h1> You have not created a Profile yet, please create a profile below! </h1>
        <Link to="/editAccount" className="menu-btn">Edit Account</Link>
      </div>
    )
  }
  else if(myRawTests === "emers")
  { return (
      <div className="App">
        <h1>Ni haody, {myAccount.name}!</h1>
        <div className="avatar-div">
        <img className="img-avatar" src={currentProfile.photo}></img><br/><br/>
        </div>
        <p>Username: {myAccount.name}</p>
        <p>Email: {myAccount.email}</p>
        <p>Full Name: {currentProfile.first_name} {currentProfile.last_name}</p>
        <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        <h1> You have not taken the WhoRU Personality Test yet, please take the test to view your results here! </h1>
        <Link to="/loadTest" className="menu-btn">Take a placement test!</Link>
      </div>
    )
  }
  else
  { return (
      <div className="App">
        <h1>Ni haody, {myAccount.name}!</h1>
        <div className="avatar-div">
        <img className="img-avatar" src={currentProfile.photo}></img><br/><br/>
        </div>
        <p>Username: {myAccount.name}</p>
        <p>Email: {myAccount.email}</p>
        <p>Full Name: {currentProfile.first_name} {currentProfile.last_name}</p>
        <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        <h1> Your latest personality type: {myTests[lastIndex].results}</h1>
        <img onClick={() => props.history.push(linkyloo)} className="p-avatar" src={filteredPersonality.image}></img>
        <p>{filteredPersonality.introduction}</p>
        <p>{filteredPersonality.intropp}</p>
        <h1> You can read more about <Link to={linkyloo}>{filteredPersonality.name}s</Link> and other personality types <Link to="/personalities">here</Link>.</h1>
        <Link to="/loadTest" className="menu-btn">Retake Test</Link>
      </div>
    )
  }
}

  export default MyProfile;
  