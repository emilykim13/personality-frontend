import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const MyProfile = (props) => {
  // const dispatch = useDispatch()
  const testing = useSelector(state => state.usersState.current_user)
  const myAccount = useSelector(state => state.usersState.current_user.user)
  // const myProfiles = "berto"
  // const myRawTests = "emers"

  // const myProfiles = useSelector(state => {(state.usersState.current_user.profiles.length === undefined) ? "berto" : state.usersState.current_user.profiles });
  // const myRawTests = useSelector(state => {(state.usersState.current_user.tests.length === undefined) ? "emers" : state.usersState.current_user.tests});

  // console.log(testing.profiles)
//  const myProfiles = useSelector(state => (state.usersState.current_user.profiles === []) ? "berto" : state.usersState.current_user.profiles );
//   const myRawTests = useSelector(state => (state.usersState.current_user.tests === []) ? "emers" : state.usersState.current_user.tests);
  
console.log(testing.tests.length)
   const myProfiles = (testing.profiles.length === 0) ? "berto" : testing.profiles 
  const myRawTests = (testing.tests.length === 0) ? "emers" : testing.tests
  

  // const myProfiles = testing.profiles === [] ? "berto" : useSelector(state => (state.usersState.current_user.profiles));
  // const myRawTests = testing.tests === [] ? "emers" : useSelector(state => (state.usersState.current_user.tests));
  // testing vars
  const myTests = (myRawTests === "emers") ? console.log("note: no tests taken yet -myTests") : myRawTests.filter(test => test.results !== null) 
  const lastIndex = (myRawTests === "emers") ? console.log("note: no tests taken yet -lastIndex") : myTests.length - 1 
  const prsnts = useSelector(state => state.personalitiesState.personalities)
  const filteredPersonality = (myRawTests === "emers") ? console.log("note: no tests taken yet -filterPersonality") :  prsnts.filter(p => p.letters === myTests[lastIndex].results)[0]
  const linkyloo = (myRawTests === "emers") ? console.log("cannot get filteredPersonality - no test created yet") : `/${filteredPersonality.name.toLowerCase()}`


// old code, currently breaking
  // const myTests = (myRawTests !== "emers") ? myRawTests.filter(test => test.results !== null) : "note: no tests taken yet -myTests"
  // const lastIndex = (myRawTests !== "emers") ? myTests.length - 1 : "note: no tests taken yet -lastIndex"
  // const prsnts = useSelector(state => state.personalitiesState.personalities)
  // const filteredPersonality = (myRawTests !== "emers") ? prsnts.filter(p => p.letters === myTests[lastIndex].results)[0] : "note: no tests taken yet -filterPersonality"
  // const linkyloo = (myRawTests !== "emers") ? `/${filteredPersonality.name.toLowerCase()}` : console.log("cannot get filteredPersonality - no test created yet")

  if((myProfiles === "berto"))
{    return (
        <div className="App">
          <h1>Ni haody, {myAccount.name}!</h1>
          <p>Username: {myAccount.name}</p>
          <p>{myAccount.email}</p>
          <h1> You have not created a Profile yet, please create a profile below! </h1>
  
          <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        </div>
      )}

  else if(myRawTests === "emers")
{      return (
          <div className="App">
            <h1>Ni haody, {myAccount.name}!</h1>
            <p>Username: {myAccount.name}</p>
            <p>{myAccount.email}</p>
            <h1> You have not taken the WhoRU Personality Test yet, please take the test to view your results here! </h1>
            <Link to="/editAccount" className="menu-btn">Edit Account</Link>
          </div>
        )}
// else is working good. conditions that are not met, lead to else returned
    else
{      return (
        <div className="App">
          <h1>Ni haody, {myAccount.name}!</h1>
          <p>Username: {myAccount.name}</p>
          <p>{myAccount.email}</p>
          <h1> Your latest personality type: {myTests[lastIndex].results}</h1>
          <img onClick={() => props.history.push(linkyloo)} className="p-avatar" src={filteredPersonality.image}></img>
          <p>{filteredPersonality.introduction}</p>
          <p>{filteredPersonality.intropp}</p>
          <h1> You can read more about <Link to={linkyloo}>{filteredPersonality.name}s</Link> and other personality types <Link to="/personalities">here</Link>.</h1>
          <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        </div>
      )}


  }

  export default MyProfile;
  