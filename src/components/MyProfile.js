import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../actions/userAction'
import EditUserForm from "./EditUserForm.js"
const MyProfile = () => {
  const dispatch = useDispatch()
  const myProfileState = useSelector(state => state.usersState)
  const myProfiles = useSelector(state => state.usersState.current_user.profiles)
  const myAccount = useSelector(state => state.usersState.current_user.user)
  let lastProfile = myProfiles.length > 0 ? myProfiles.length - 1 : null
    console.log(myAccount)
    return (
        <div>
          <h1>Ni haody, this is my components/MyProfile.js</h1>
          <h1> Your latest personality type: {myProfiles[lastProfile].personality_letters} aka the {myProfiles[lastProfile].personality_character} </h1>
          <h1> You can read more about {myProfiles[lastProfile].personality_character}s and more <Link to="/personalities">here</Link>.</h1>
          <Link to="/editAccount" className="menu-btn">Edit Account</Link>
        </div>
      )
  }

  export default MyProfile;
  