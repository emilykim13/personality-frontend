import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Tp1 = (props) => {
    const qState = useSelector(state => state.questionsState)
    const testQ = qState.questions
    const hi = `radio-answer${props.question_string}`

    return (
        <div>
            <div className="radio-row">
                <h4 className="question-text" >{props.question_string}</h4>
                <label for="strongly-disagree">Strongly Disagree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="strongly-disagree" value="strongly-disagree" checked={null} />
                <label for="disagree">Disagree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="disagree" value="disagree" checked={null}/>
                <label for="slgihtly-disagree">Slightly Disagree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="slightly-disagree" value="slightly-disagree" checked={null}/>
                <label for="neutral">Neutral</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="neutral" value="neutral" checked={null} />
                <label for="slightly-agree">Slightly Agree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="slightly-agree" value="slightly-agree" checked={null}/>
                <label for="agree">Agree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="agree" value="agree" checked={null} />
                <label for="strongly-agree">Strongly Agree</label>
                <input onClick={(e) => console.log(e)} name={hi} type="radio" id="strongly-agree" value="strongly-agree" checked={null}/>
            </div>
        </div>
    )
}



export default Tp1