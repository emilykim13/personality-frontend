import React from "react"
import {Redirect} from "react-router-dom"
import { handleSignUp, handleSignValidation } from "../actions/SignUpAction"
import { useSelector, useDispatch} from "react-redux"

const SignUp = (props) => {
    let logState = useSelector(state => state.loginState)
    let dispatch = useDispatch()
    return(
        <form onSubmit={async (e) => {
            e.preventDefault()
            handleSignUp(e.target, props.history, dispatch)}}> 
            <h1> Create and account below! </h1>
            <label>username</label>
            <input type="text"/>
            <br/>
            <label>email</label>
            <input type="text"/>
            <br/>
            <label>password</label>
            <input type="password"/>
            <br/>
            <label>confirm password</label>
            <input type="password"/>
            <br/>
            <input className="menu-btn" type="submit" value="Sign up"/>
            {console.log(logState.loggedIn)}
            {logState.loggedIn ? <Redirect to="/home"/> : null}
        </form>
    )
}

export default SignUp