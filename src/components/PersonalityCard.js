import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const personalityCard = (props) => {

    const typeLink = `/${props.personality.name.toLowerCase()}`
    console.log(typeLink)
    return (
        <div>
            <br/><br/>
            <div className="App">
                <h1 className="p-s-text">The {props.personality.name} - {props.personality.letters}</h1>
                <img className="p-avatar" src={props.personality.image} alt="Avatar" ></img>
                <h1 className="p-s-text" >{props.personality.name}</h1>
                <h2 className="p-s-text" >{props.personality.letters}</h2>
                <p className="p-s-text" >{props.personality.summary}</p>
                <Link to={typeLink} className="menu-btn">VIEW {props.personality.letters}</Link><br/><br/>

            </div>
        <br/><br/>
        </div>
    )
}

export default personalityCard
