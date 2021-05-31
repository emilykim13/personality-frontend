import React from 'react'
import { updateUser } from "../actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const EditUserForm = (props) => {
    const myAccount = useSelector(state => state.usersState.current_user.user)
    const dispatch = useDispatch()
    const myProfiles = useSelector(state => (state.usersState.current_user.profiles < 1) ? "nope" : state.usersState.current_user.profiles)
    const lastIndex = (myProfiles === "nope") ? console.log("profile is empty - lastIndex MyProfile not given") : myProfiles.length - 1
    const myProfile = (myProfiles === "nope") ? console.log("profile is empty - current_profile not available") : myProfiles[lastIndex]
    return (
        <div>
            <form onSubmit={(e) => 
                {e.preventDefault() 
                dispatch(updateUser(e, myAccount, props.history))}
                }> 
                <h1>Update account information: </h1>
                <label>Username:</label>
                <input required defaultValue={(myProfiles === "nope") ? myAccount.name : myProfile.username} type="text"/>
                <br/>
                <label>Email:</label>
                <input required defaultValue={(myProfiles === "nope") ? myAccount.email : myProfile.email}type="text"/>
                <br/>
                <label>First Name:</label>
                <input required defaultValue={(myProfiles === "nope") ? "" : myProfile.first_name}type="text"/>
                <br/>
                <label>Last Name: </label>
                <input required defaultValue={(myProfiles === "nope") ? "" : myProfile.last_name}type="text"/>
                <br/>
                <label>Profile Photo: </label>
                <input required defaultValue={(myProfiles === "nope") ? "" : myProfile.photo}type="text"/>
                <br/>
                <br/>
                <input className="menu-btn" type="submit" value="Update"/>
            </form>
            <Link to="/delete" className="menu-btn">Delete Account</Link><br/><br/>
            <Link to="/home" className="menu-btn">Go Back Home</Link><br/><br/>
        </div>
    )
}

export default EditUserForm
