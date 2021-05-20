import React from 'react'
import { Redirect, Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
          <h1>Ni haody, this is my components/Home.js</h1><br/><br/>
          {/* <Link to="/MyProfile" className="menu-btn">Go to my Profile</Link><br/><br/>
          <Link to="/personalities" className="menu-btn">Go to Personalities</Link><br/><br/> */}
          <button className="menu-btn" onClick={props.handleLogout}>Logout</button>
          {/* {!props.loggedIn ? <Redirect to="/login"/> : null} */}
        </div>
    )
}

export default Home