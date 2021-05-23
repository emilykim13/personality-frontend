import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp3 = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q21-30")}
    return (
        <div>
            <h1>test page 3</h1>
            <h5 className="question-text" >{testQ[20].question_string}</h5>
            <h5 className="question-text" >{testQ[21].question_string}</h5>
            <h5 className="question-text" >{testQ[22].question_string}</h5>
            <h5 className="question-text" >{testQ[23].question_string}</h5>
            <h5 className="question-text" >{testQ[24].question_string}</h5>
            <h5 className="question-text" >{testQ[25].question_string}</h5>
            <h5 className="question-text" >{testQ[26].question_string}</h5>
            <h5 className="question-text" >{testQ[27].question_string}</h5>
            <h5 className="question-text" >{testQ[28].question_string}</h5>
            <h5 className="question-text" >{testQ[29].question_string}</h5>

            <Link to="/tp4" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp3
