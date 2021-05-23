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
        <div>
            <h1>Start test page</h1>
            {testQ.length == 0 ? null : <Tp1 />}
        </div>
    )
}

export default StartTest