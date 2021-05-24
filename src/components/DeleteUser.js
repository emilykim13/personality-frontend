import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from 'react-router'
import { deleteUser } from '../actions/userAction'


const DeleteUser = () => {
    const uState = useSelector(state => state.usersState)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Are you sure you want delete your account?</h1>
            <button onClick={(e)=> {
                e.preventDefault();
                dispatch(deleteUser())}}>
                DELETE MY ACCOUNT
            </button><br/><br/>
          {!uState.loggedIn ? <Redirect to="/login" /> : null}
        </div>
    )
}

export default DeleteUser
