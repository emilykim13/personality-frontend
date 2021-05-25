import React from 'react'
import { Link } from "react-router-dom"

const TypesMenu = () => {
    return (
        <div>
            <Link to="/architect" className="menu-btn">INTJ</Link>
            <Link to="/logician" className="menu-btn">INTP</Link>
            <Link to="/commander" className="menu-btn">ENTJ</Link>
            <Link to="/debator" className="menu-btn">ENTP</Link>
            <Link to="/advocate" className="menu-btn">INFJ</Link>
            <Link to="/mediator" className="menu-btn">INFP</Link>
            <Link to="/protagonist" className="menu-btn">ENFJ</Link>
            <Link to="/campaigner" className="menu-btn">ENFP</Link>
            <Link to="/logistician" className="menu-btn">ISTJ</Link>
            <Link to="/defender" className="menu-btn">ISFJ</Link>
            <Link to="/executive" className="menu-btn">ESTJ</Link>
            <Link to="/consul" className="menu-btn">ESFJ</Link>
            <Link to="/virtuoso" className="menu-btn">ISTP</Link>
            <Link to="/adventurer" className="menu-btn">ISFP</Link>
            <Link to="/entreprenuer" className="menu-btn">ESTP</Link>
            <Link to="/entertainer" className="menu-btn">ESFP</Link><br/><br/>
        </div>
    )
}

export default TypesMenu
