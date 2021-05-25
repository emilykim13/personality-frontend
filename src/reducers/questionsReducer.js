const initialState = {
    questions: [],
    loadQuestions: false
}

const questionsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_QUESTIONS":
            // console.log(action)
            return {
                ...state,
                questions: action.questions,
                loadQuestions: true
            }
            default: 
            return state
    }
}

export default questionsReducer