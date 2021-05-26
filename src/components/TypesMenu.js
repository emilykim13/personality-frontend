import { Link } from "react-router-dom"
import React, {useState} from "react"
import PNavIcon from "./PNavIcon"

const TypesMenu = () => {
    let [displayPState, setDisplay] = useState(false)
    return (

    
    <div>
        <button onClick={() => setDisplay(!displayPState)}> {<PNavIcon/>} </button>
        {
            displayPState ?
            <div>
            <li className="hm-li">
                <Link to="/architect" onClick={() => setDisplay(!displayPState)} className="menu-btn">INTJ</Link>
                <Link to="/logician" onClick={() => setDisplay(!displayPState)} className="menu-btn">INTP</Link>
                <Link to="/commander" onClick={() => setDisplay(!displayPState)} className="menu-btn">ENTJ</Link>
                <Link to="/debator" onClick={() => setDisplay(!displayPState)} className="menu-btn">ENTP</Link>
            </li>
            <li className="hm-li">
                <Link to="/advocate" onClick={() => setDisplay(!displayPState)} className="menu-btn">INFJ</Link>
                <Link to="/mediator" onClick={() => setDisplay(!displayPState)} className="menu-btn">INFP</Link>
                <Link to="/protagonist" onClick={() => setDisplay(!displayPState)} className="menu-btn">ENFJ</Link>
                <Link to="/campaigner" onClick={() => setDisplay(!displayPState)} className="menu-btn">ENFP</Link>
            </li>
            <li className="hm-li">
                <Link to="/logistician" onClick={() => setDisplay(!displayPState)} className="menu-btn">ISTJ</Link>
                <Link to="/defender" onClick={() => setDisplay(!displayPState)} className="menu-btn">ISFJ</Link>
                <Link to="/executive" onClick={() => setDisplay(!displayPState)} className="menu-btn">ESTJ</Link>
                <Link to="/consul" onClick={() => setDisplay(!displayPState)} className="menu-btn">ESFJ</Link>
            </li>
            <li className="hm-li">
                <Link to="/virtuoso" onClick={() => setDisplay(!displayPState)} className="menu-btn">ISTP</Link>
                <Link to="/adventurer" onClick={() => setDisplay(!displayPState)} className="menu-btn">ISFP</Link>
                <Link to="/entreprenuer" onClick={() => setDisplay(!displayPState)} className="menu-btn">ESTP</Link>
                <Link to="/entertainer" onClick={() => setDisplay(!displayPState)} className="menu-btn">ESFP</Link>
            </li>
            <br/><br/>
        </div>
        : null 
        } 
    </div>
    )
}

export default TypesMenu
