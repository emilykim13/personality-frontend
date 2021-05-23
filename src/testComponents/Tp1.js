import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from "../actions/questionAction"


const Tp1 = () => {
    const qState = useSelector(state => state.questionsState)
    // const dispatch = useDispatch()
    const testQ = qState.questions
    // dispatch(getQuestions)
    // {!qState.loadQuestions ? dispatch(getQuestions) : console.log("nope - q1-10")}
    // {testQ.length = 0 ? }
    return (
        <div>
            <h1>test page 1</h1>

            <h5 className="question-text" >{testQ[0].question_string}</h5>;
            <h5 className="question-text" >{testQ[1].question_string}</h5>;
            <h5 className="question-text" >{testQ[2].question_string}</h5>;
            <h5 className="question-text" >{testQ[3].question_string}</h5>;
            <h5 className="question-text" >{testQ[4].question_string}</h5>;
            <h5 className="question-text" >{testQ[5].question_string}</h5>;
            <h5 className="question-text" >{testQ[6].question_string}</h5>;
            <h5 className="question-text" >{testQ[7].question_string}</h5>;
            <h5 className="question-text" >{testQ[8].question_string}</h5>;
            <h5 className="question-text" >{testQ[9].question_string}</h5>;

            <Link to="/tp2" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp1
