import React from "react"
import {Redirect, Link} from "react-router-dom"
import { handleSignUp, handleSignValidation } from "../actions/SignUpAction"
import { useSelector, useDispatch} from "react-redux"

const SignUp = (props) => {
    let logState = useSelector(state => state.usersState)
    let dispatch = useDispatch()
    return(
        <div className="sign-in">
        <img className="head-img-band" src="https://live-production.wcms.abc-cdn.net.au/ec9de9743a21adc30a3716cb91347c85?impolicy=wcms_crop_resize&cropH=1069&cropW=1898&xPos=16&yPos=0&width=862&height=485"></img><br/><br/>

        <form className="sign-in-cont" onSubmit={async (e) => {
            e.preventDefault()
            handleSignUp(e.target, props.history, dispatch)}}> 
            <h1> Create an account below! </h1>
            <label>USERNAME</label>
            <input required type="text"/>
            <br/>
            <label>EMAIL</label>
            <input required type="text"/>
            <br/>
            <label>PASSWORD</label>
            <input required type="password"/>
            <br/>
            <label>CONFIRM PASSWORD</label>
            <input required type="password"/>
            <br/><br/>
            <input className="menu-btn" type="submit" value="Sign up"/><br/><br/>
            <Link to="/login" className="menu-btn">Go Back</Link><br/><br/>
        </form>
        </div>
    )
}

export default SignUp