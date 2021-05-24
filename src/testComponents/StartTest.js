import React from 'react'
import Tp1 from "./Tp1.js"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const StartTest = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // dispatch(getQuestions)
    {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q1-10")}

    return (
        <div className="App">
            <form>
            <h1>WhoRU The Personality Test</h1>
            {/* {testQ.length == 0 ? null : <Tp1/>} */}
            {testQ.length == 0 ? null : testQ.map(qs => <Tp1 question_string={qs.question_string}/>)}
            <button type="submit" className="menu-btn">Submit Test</button>
            </form>
        </div>
    )
}

export default StartTest
