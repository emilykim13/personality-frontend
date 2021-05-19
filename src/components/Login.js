import React from "react"
import { useHistory, Redirect } from "react-router-dom"

const Login = (props) => {
    return (
        <form onSubmit={props.handleLogin}>
            <label>email</label>
            <input type="text"/>
            <br/>
            <label>password</label>
            <input type="password"/>
            <br/>
            <input type="submit" value="Login"/>
            {props.loggedIn ? <Redirect to="/home"/> : null}
        </form>
    )
}
  export default Login;
  