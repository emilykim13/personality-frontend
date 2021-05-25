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
            <div className="radio-row">
                <h3 className="question-text" >{testQ[10].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[11].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[12].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[13].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[14].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[15].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[16].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[17].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[18].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            <div className="radio-row">
                <h3 className="question-text" >{testQ[19].question_string}</h3>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" name="radio-answer10" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name="radio-answer10" type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name="radio-answer10" type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name="radio-answer10" type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name="radio-answer10" type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input name="radio-answer10" type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name="radio-answer10" type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>

            <Link to="/tp3" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp2