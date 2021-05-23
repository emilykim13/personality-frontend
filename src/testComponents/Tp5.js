import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp5 = () => {
    const qState = useSelector(state => state.questionsState)
    const dispatch = useDispatch()
    const testQ = qState.questions
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q41-50")}
    return (
        <div>
            <h1>test page 5</h1>
            <h5 className="question-text" >{testQ[40].question_string}</h5>
            <h5 className="question-text" >{testQ[41].question_string}</h5>
            <h5 className="question-text" >{testQ[42].question_string}</h5>
            <h5 className="question-text" >{testQ[43].question_string}</h5>
            <h5 className="question-text" >{testQ[44].question_string}</h5>
            <h5 className="question-text" >{testQ[45].question_string}</h5>
            <h5 className="question-text" >{testQ[46].question_string}</h5>
            <h5 className="question-text" >{testQ[47].question_string}</h5>
            <h5 className="question-text" >{testQ[48].question_string}</h5>
            <h5 className="question-text" >{testQ[49].question_string}</h5>

            <Link to="/tp6" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp5