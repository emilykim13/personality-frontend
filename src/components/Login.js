import React from "react"
import { useHistory, Redirect, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from "../actions/loginAction"

const Login = (props) => {
    let logState = useSelector(state => state.usersState)
    let dispatch = useDispatch()
    return (
        <div>
        {logState.loggedIn ? <Redirect to="/home"/> : null}
        <form onSubmit={async (e) => {
            e.preventDefault()
            handleLogin(e.target, props.history, dispatch)}}> 
            <h1>Please sign in: </h1>
            <label>email</label>
            <input required type="text"/>
            <br/>
            <label>password</label>
            <input required type="password"/>
            <br/>
            <input className="menu-btn" type="submit" value="Login"/>
            {logState.loggedIn ? <Redirect to="/home"/> : null}
            <br/><br/>
            <Link to="/signup" className="menu-btn">Create a new account</Link><br/><br/>
        </form>
        </div>
    )
}
  export default Login;
  