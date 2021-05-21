import React from "react"
import { Link, Redirect, useHistory } from "react-router-dom"
import { handleLogout } from "../actions/loginAction"
import { useDispatch, useSelector } from 'react-redux'

const Menu = (props) => { 
    let logState = useSelector(state => state.loginState)
    let dispatch = useDispatch()
    let history = useHistory()
    return (
        <div>
            <p>This is my Menu.js</p>
            <Link to="/home" className="menu-btn">Home</Link><br/><br/>
            <Link to="/MyProfile" className="menu-btn">Profile</Link><br/><br/>
            <Link to="/personalities" className="menu-btn">Personalities</Link><br/><br/>
            <button className="menu-btn" onClick={() => handleLogout(history, dispatch)}>Logout</button>
        </div>
    )
}
  export default Menu;
  