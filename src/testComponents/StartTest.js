import React from 'react'
import Tp1 from "./Tp1.js"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"
import { handleResponses } from '../actions/testAction.js'


const StartTest = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - tp1")}
    const quest_id = testQ.map(q => q.id)
    // const test_id = useSelector(state=>state.testsState.test.test.id)
    // console.log(test_id)
    return (
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleResponses(e, 4, quest_id, dispatch)
            }}>
            <h1>WhoRU The Personality Test</h1>
            {testQ.length == 0 ? null : testQ.map(qs => <Tp1 question={qs}/>)}
            <button type="submit" className="menu-btn">Submit Test</button>
            </form>
        </div>
    )
}

export default StartTest
