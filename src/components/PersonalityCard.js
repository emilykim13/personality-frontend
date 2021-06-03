import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const PersonalityCard = (props) => {
    const history = useHistory()
    const typeLink = `/${props.personality.name.toLowerCase()}`
    return (
        <div>
            <br/><br/>
            <div className="App">
                <div>
                    <h1 className="p-s-text">The {props.personality.name} - {props.personality.letters}</h1>
                    <img onClick={() => history.push(typeLink)} className="p-avatar" src={props.personality.image}></img>
                    <h1 className="p-s-text" >{props.personality.name}</h1>
                    <h2 className="p-s-text" >{props.personality.letters}</h2>
                    <p className="p-sum-text" >{props.personality.summary}</p><br/>
                    <Link to={typeLink} className="menu-btn">VIEW {props.personality.letters}</Link><br/><br/>
                </div>
            </div>
        <br/><br/>
        </div>
    )
}

export default PersonalityCard
