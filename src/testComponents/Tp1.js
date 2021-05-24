import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Tp1 = (props) => {
    const qState = useSelector(state => state.questionsState)
    const testQ = qState.questions
    const hi = `radio-answer${props.question_string}`

    return (
        <div>
            {/* <h1>test page 1</h1> */}
            
                <div className="radio-row">
                    {/* {console.log(props)} */}
                    <h4 className="question-text" >{props.question_string}</h4>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input name={hi} type="radio" id="strongly-disagree" value="strongly-disagree" checked={null} />
                    <label for="disagree">Disagree</label>
                    <input name={hi} type="radio" id="disagree" value="disagree" checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input name={hi} type="radio" id="slightly-disagree" value="slightly-disagree" checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input name={hi} type="radio" id="neutral" value="neutral" checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input name={hi} type="radio" id="slightly-agree" value="slightly-agree" checked={null}/>
                    <label for="agree">Agree</label>
                    <input name={hi} type="radio" id="agree" value="agree" checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input name={hi} type="radio" id="strongly-agree" value="strongly-agree" checked={null}/>
                </div>
            {/* <Link to="/tp2" className="menu-btn">Next page</Link> */}
        </div>
    )
}

export default Tp1