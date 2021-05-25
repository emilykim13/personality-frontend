import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


const Results = () => {
    const testState = useSelector(state => state.testsState)
    console.log(testState)
    const linkydoo = `${testState.p_results[0].name.toLowerCase()}`
    return (
        <div>
            <h1>THE RESULTSSSS!</h1>
            <h1>Your personality type is: {testState.p_results[0].name}!</h1>
            <Link to={linkydoo} className="menu-btn">{testState.p_results[0].name}!</Link>
            <h2>{testState.test.test.results}</h2>
            <Link to="/MyProfile" className="menu-btn">Go to your profile</Link>
        </div>
    )
}

export default Results
