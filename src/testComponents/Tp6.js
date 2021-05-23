import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp6 = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q51-60")}
    return (
        <div>
            <h1>test page 6</h1>
            <h5 className="question-text" >{testQ[50].question_string}</h5>
            <h5 className="question-text" >{testQ[51].question_string}</h5>
            <h5 className="question-text" >{testQ[52].question_string}</h5>
            <h5 className="question-text" >{testQ[53].question_string}</h5>
            <h5 className="question-text" >{testQ[54].question_string}</h5>
            <h5 className="question-text" >{testQ[55].question_string}</h5>
            <h5 className="question-text" >{testQ[56].question_string}</h5>
            <h5 className="question-text" >{testQ[57].question_string}</h5>
            <h5 className="question-text" >{testQ[58].question_string}</h5>
            <h5 className="question-text" >{testQ[59].question_string}</h5>

            <Link to="/results" className="menu-btn">Submit Answers</Link>
        </div>
    )
}

export default Tp6
