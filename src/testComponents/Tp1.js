import React from 'react'

const Tp1 = (props) => {
    const hi = `radio-answer${props.question.question_string}`
    return (
        <div>
            <div className="App">
                <strong><h3 className="q-contain" >{props.question.question_string}</h3></strong>
                <div className="contain-flex">
                    <div className="t-contain-flex" >
                        <label for="strongly-disagree">Strongly Disagree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="strongly-disagree" value="strongly-disagree" checked={null} />
                    </div>
                    <div className="t-contain-flex" >
                        <label for="disagree">Disagree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="disagree" value="disagree" checked={null}/>
                    </div>
                    <div className="t-contain-flex" >
                        <label for="slgihtly-disagree">Slightly Disagree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="slightly-disagree" value="slightly-disagree" checked={null}/>
                    </div>
                    <div className="t-contain-flex" >
                        <label for="neutral">Neutral </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="neutral" value="neutral" checked={null} />
                    </div>
                    <div className="t-contain-flex" >
                        <label for="slightly-agree">Slightly Agree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="slightly-agree" value="slightly-agree" checked={null}/>
                    </div>
                    <div className="t-contain-flex" >
                        <label for="agree">Agree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="agree" value="agree" checked={null} />
                    </div>
                    <div className="t-contain-flex" >
                        <label for="strongly-agree">Strongly Agree </label><br/>
                        <input onClick={(e) => console.log(e)} required name={hi} type="radio" id="strongly-agree" value="strongly-agree" checked={null}/>
                    </div>
                </div>
            </div><br/><br/><br/>
        </div>
    )
}

export default Tp1