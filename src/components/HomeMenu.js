import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { handleLogout } from "../actions/loginAction"
import { useDispatch } from 'react-redux'
import NavIcon from "./NavIcon.js"

const HomeMenu = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const [displayState, setDisplay] = useState(false)
    return (
        <div>
            <button onClick={() => setDisplay(!displayState)}> {<NavIcon/>} </button>
            {
            displayState ? 
            <div>
                <li className="hm-li"><Link onClick={() => setDisplay(!displayState)}className="menu-btn" to="/home">Home</Link></li>
                <li className="hm-li"><Link to="/MyProfile" onClick={() => setDisplay(!displayState)}className="menu-btn">Profile</Link></li>
                <li className="hm-li"><Link to="/personalities" className="menu-btn" onClick={() => setDisplay(!displayState)}>Personalities</Link></li>
                <li className="hm-li"><Link to="/loadTest" className="menu-btn" onClick={() => setDisplay(!displayState)}>Take a test</Link></li>
                <li className="hm-li"><button className="menu-btn" onClick={() => handleLogout(history, dispatch)}>Logout</button></li>
                <br/><br/>
            </div> 
            : null
            }
        </div>
    )
}

export default HomeMenu
