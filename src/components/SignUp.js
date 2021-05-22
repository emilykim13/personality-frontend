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
            <input required type="text"/>
            <br/>
            <label>email</label>
            <input required type="text"/>
            <br/>
            <label>password</label>
            <input required type="password"/>
            <br/>
            <label>confirm password</label>
            <input required type="password"/>
            <br/>
            <input className="menu-btn" type="submit" value="Sign up"/>
        </form>
    )
}

export default SignUp