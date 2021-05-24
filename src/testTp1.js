import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Tp1 = () => {
    const qState = useSelector(state => state.questionsState)
    const testQ = qState.questions

    return (
        <div>
            <h1>test page 1</h1>
            <form>
                <div className="radio-row">
                    <h4 className="question-text" >{testQ[0].question_string}</h4>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>

                <div className="radio-row">
                    <h5 className="question-text" >{testQ[1].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[2].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[3].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[4].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[5].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[6].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[7].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[8].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
                <div className="radio-row">
                    <h5 className="question-text" >{testQ[9].question_string}</h5>
                    <label for="strongly-disagree">Strongly Disagree</label>
                    <input classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
                    <label for="disagree">Disagree</label>
                    <input type="radio" id="disagree" value={2} checked={null}/>
                    <label for="slgihtly-disagree">Slightly Disagree</label>
                    <input type="radio" id="slightly-disagree" value={1} checked={null}/>
                    <label for="neutral">Neutral</label>
                    <input type="radio" id="neutral" value={0} checked={null} />
                    <label for="slightly-agree">Slightly Agree</label>
                    <input type="radio" id="slightly-agree" value={1} checked={null}/>
                    <label for="agree">Agree</label>
                    <input type="radio" id="agree" value={2} checked={null} />
                    <label for="strongly-agree">Strongly Agree</label>
                    <input type="radio" id="strongly-agree" value={3} checked={null}/>
                </div>
            </form>

            <Link to="/tp2" className="menu-btn">Next page</Link>
        </div>
    )
}

export default Tp1



// import React from 'react'
// import {Link} from "react-router-dom"
// import { useSelector } from 'react-redux'

// const Tp1 = (props) => {
//     const qState = useSelector(state => state.questionsState)
//     const testQ = qState.questions

//     return (
//         <div>
//             {/* <h1>test page 1</h1> */}

//                 <div className="radio-row">
//                     {/* {console.log(props)} */}
//                     <h4 className="question-text" >{props.question_string}</h4>
//                     <label for="strongly-disagree">Strongly Disagree</label>
//                     <input name="radio-answer" classname="radio-input" type="radio" id="strongly-disagree" value={3} checked={null} />
//                     <label for="disagree">Disagree</label>
//                     <input name="radio-answer" type="radio" id="disagree" value={2} checked={null}/>
//                     <label for="slgihtly-disagree">Slightly Disagree</label>
//                     <input name="radio-answer" type="radio" id="slightly-disagree" value={1} checked={null}/>
//                     <label for="neutral">Neutral</label>
//                     <input name="radio-answer" type="radio" id="neutral" value={0} checked={null} />
//                     <label for="slightly-agree">Slightly Agree</label>
//                     <input name="radio-answer" type="radio" id="slightly-agree" value={1} checked={null}/>
//                     <label for="agree">Agree</label>
//                     <input name="radio-answer" type="radio" id="agree" value={2} checked={null} />
//                     <label for="strongly-agree">Strongly Agree</label>
//                     <input name="radio-answer" type="radio" id="strongly-agree" value={3} checked={null}/>
//                 </div>
//             {/* <Link to="/tp2" className="menu-btn">Next page</Link> */}
//         </div>
//     )
// }

// export default Tp1
