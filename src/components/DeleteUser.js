import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Redirect, Link } from 'react-router-dom'
import { deleteUser } from '../actions/userAction'


const DeleteUser = () => {
    const uState = useSelector(state => state.usersState)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>Are you sure you want delete your account?</h1>
            <Link to="/home" className="menu-btn">NO DON'T DELETE</Link><br/><br/><br/><br/>
            <button className="delete-btn" onClick={(e)=> {
                e.preventDefault();
                dispatch(deleteUser())}}>
                YES DELETE IT
            </button><br/><br/>
          {!uState.loggedIn ? <Redirect to="/login" /> : null}
        </div>
    )
}

export default DeleteUser
