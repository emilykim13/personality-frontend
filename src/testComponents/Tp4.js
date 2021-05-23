import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp4 = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q31-40")}
    return (
        <div>
            <h1>test page 4</h1>
            <h5 className="question-text" >{testQ[30].question_string}</h5>
            <h5 className="question-text" >{testQ[31].question_string}</h5>
            <h5 className="question-text" >{testQ[32].question_string}</h5>
            <h5 className="question-text" >{testQ[33].question_string}</h5>
            <h5 className="question-text" >{testQ[34].question_string}</h5>
            <h5 className="question-text" >{testQ[35].question_string}</h5>
            <h5 className="question-text" >{testQ[36].question_string}</h5>
            <h5 className="question-text" >{testQ[37].question_string}</h5>
            <h5 className="question-text" >{testQ[38].question_string}</h5>
            <h5 className="question-text" >{testQ[39].question_string}</h5>

            <Link to="/tp5" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp4
