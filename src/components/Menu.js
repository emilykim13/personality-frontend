import React from "react"
import { Link, Redirect, Router } from "react-router-dom"

const Menu = (props) => { 
    return (
        <div>
            <p>This is my Menu.js</p>
            <Link to="/MyProfile" className="menu-btn">Go to my Profile</Link><br/><br/>
            <Link to="/personalities" className="menu-btn">Go to Personalities</Link><br/><br/>
        </div>
    )
}
  export default Menu;
  