import React, {useEffect} from "react"
import { useHistory, Redirect, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from "../actions/loginAction"
import { loadLogin } from "../actions/loginAction"


const Login = (props) => {
    useEffect(() => {
        if(localStorage.token){
          loadLogin(dispatch);
        }
      }, [])
    let logState = useSelector(state => state.usersState)
    let dispatch = useDispatch()
    return (
        <div className="sign-in">
        {/* {logState.loggedIn ? <Redirect to="/home"/> : null} */}
        <img className="head-img-band" src="https://live-production.wcms.abc-cdn.net.au/ec9de9743a21adc30a3716cb91347c85?impolicy=wcms_crop_resize&cropH=1069&cropW=1898&xPos=16&yPos=0&width=862&height=485"></img><br/><br/>

        <form className="sign-in-cont" onSubmit={async (e) => {
            e.preventDefault()
            handleLogin(e.target, props.history, dispatch)}}> 
            <h1> Welcome to WhoRU! </h1>
            <h1>Please sign in: </h1>
            <label>EMAIL</label>
            <input required type="text"/>
            <br/>
            <label>PASSWORD</label>
            <input required type="password"/>
            <br/><br/>
            <input className="menu-btn" type="submit" value="Login"/>
            {/* {logState.loggedIn ? <Redirect to="/home"/> : null} */}
            <br/><br/><br/>
            <Link to="/signup" className="menu-btn">Create a new account</Link><br/><br/>
        </form>
        </div>
    )
}
  export default Login;
  