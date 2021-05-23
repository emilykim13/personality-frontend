import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp2 = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q11-20")}
    return (
        <div>
            <h1>test page 2</h1>
            <h5 className="question-text" >{testQ[10].question_string}</h5>
            <h5 className="question-text" >{testQ[11].question_string}</h5>
            <h5 className="question-text" >{testQ[12].question_string}</h5>
            <h5 className="question-text" >{testQ[13].question_string}</h5>
            <h5 className="question-text" >{testQ[14].question_string}</h5>
            <h5 className="question-text" >{testQ[15].question_string}</h5>
            <h5 className="question-text" >{testQ[16].question_string}</h5>
            <h5 className="question-text" >{testQ[17].question_string}</h5>
            <h5 className="question-text" >{testQ[18].question_string}</h5>
            <h5 className="question-text" >{testQ[19].question_string}</h5>

            <Link to="/tp3" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp2