import React from "react"
import { useHistory, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from "../actions/loginAction"

const Login = (props) => {
    let logState = useSelector(state => state.loginState)
    let dispatch = useDispatch()
    return (
        <form onSubmit={async (e) => {
            e.preventDefault()
            handleLogin(e.target, props.history, dispatch)}}> 
            <h1>Please sign in: </h1>
            <label>email</label>
            <input type="text"/>
            <br/>
            <label>password</label>
            <input type="password"/>
            <br/>
            <input className="menu-btn" type="submit" value="Login"/>
            {console.log(logState.loggedIn)}
            {logState.loggedIn ? <Redirect to="/home"/> : null}
        </form>
    )
}
  export default Login;
  