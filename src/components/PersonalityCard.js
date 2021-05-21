import React from 'react'
import { Link } from "react-router-dom"


const personalityCard = (props) => {
    // console.log(props)
    // const linkUrl = props.personality.name.toLowerCase()
    // console.log(linkUrl)
    return (
        <div>
            {/* {() => <Link to=/>} */}
            <br/><br/>
            <h1>The {props.personality.name} - {props.personality.letters}</h1>
            <div>
                <img className="p-avatar" src={props.personality.image} alt="Avatar" ></img>
                <h1>{props.personality.name}</h1>
                <h2>{props.personality.letters}</h2>
                <p>{props.personality.summary}</p><br/><br/>
            </div>
        <br/><br/>
        </div>
    )
}

export default personalityCard
