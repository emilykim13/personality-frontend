import React from "react"
import { useHistory, Redirect } from "react-router-dom"

const Login = (props) => {
    return (
        <form onSubmit={props.handleLogin}>
            <h1>Please sign in: </h1>
            <label>email</label>
            <input type="text"/>
            <br/>
            <label>password</label>
            <input type="password"/>
            <br/>
            <input className="menu-btn" type="submit" value="Login"/>
            {props.loggedIn ? <Redirect to="/home"/> : null}
        </form>
    )
}
  export default Login;
  