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

            <Link to="/architect" className="menu-btn">INTJ</Link>
            <Link to="/logician" className="menu-btn">INTP</Link>
            <Link to="/commander" className="menu-btn">ENTJ</Link>
            <Link to="/debator" className="menu-btn">ENTP</Link>

            <Link to="/advocate" className="menu-btn">INFJ</Link>
            <Link to="/mediator" className="menu-btn">INFP</Link>
            <Link to="/protagonist" className="menu-btn">ENFJ</Link>
            <Link to="/campaigner" className="menu-btn">ENFP</Link>
            <br/>
            <Link to="/logistician" className="menu-btn">ISTJ</Link>
            <Link to="/defender" className="menu-btn">ISFJ</Link>
            <Link to="/executive" className="menu-btn">ESTJ</Link>
            <Link to="/consul" className="menu-btn">ESFJ</Link>

            <Link to="/virtuoso" className="menu-btn">ISTP</Link>
            <Link to="/adventurer" className="menu-btn">ISFP</Link>
            <Link to="/entreprenuer" className="menu-btn">ESTP</Link>
            <Link to="/entertainer" className="menu-btn">ESFP</Link><br/><br/>
            <button className="menu-btn" onClick={() => handleLogout(history, dispatch)}>Logout</button>
        </div>
    )
}
  export default Menu;
  