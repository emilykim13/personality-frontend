import React from 'react'
import { updateUser } from "../actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../actions/userAction'
import DeleteUser from './DeleteUser.js'
const EditUserForm = (props) => {
    const uState = useSelector(state => state.usersState)
    const myAccount = useSelector(state => state.usersState.current_user.user)
    const dispatch = useDispatch()

    return (
        <div>
            <form onSubmit={(e) => 
                {e.preventDefault() 
                dispatch(updateUser(e, myAccount))}
                }> 
                <h1>Update account information: </h1>
                <label>name:</label>
                <input required defaultValue={myAccount.name} type="text"/>
                <br/>
                <label>email</label>
                <input required defaultValue={myAccount.email}type="text"/>
                <br/>
                {/* <label>password</label>
                <input required type="password"/> */}
                <br/>
                <input className="menu-btn" type="submit" value="Update"/>
            </form>
            <Link to="/delete" className="menu-btn">Delete Account</Link><br/><br/>

        </div>
    )
}

export default EditUserForm
