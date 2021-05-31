import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Results = (props) => {
    const userTests = useSelector(state => state.usersState.current_user.tests)
    console.log(userTests)
    const lastTest = (userTests === 0) ? console.log("note: no tests taken yet -lastTest") : userTests.length - 1 
    const currentTest = userTests[lastTest]
    const resultsPersonalities = useSelector(state => state.personalitiesState.personalities)
    const resultPerson = resultsPersonalities.filter(p => p.letters === currentTest.results)[0]
    const linkydoo = `${resultPerson.name.toLowerCase()}`
    console.log(resultPerson)
    return (
        <div className="App">
            <h1>THE RESULTSSSS!</h1>
            <h1>{currentTest.results} aka the {resultPerson.name}</h1>
            <p>{resultPerson.introduction}</p>
            <p>{resultPerson.intropp}</p>
            <img onClick={() => props.history.push(linkydoo)} className="p-avatar" src={resultPerson.image}></img><br/><br/>
            <Link to={linkydoo} className="menu-btn">View {resultPerson.name}</Link><br/><br/>
            <Link to="/MyProfile" className="menu-btn">Go to your profile</Link><br/><br/>
        </div>
    )
}

export default Results
