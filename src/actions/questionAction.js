const questionsUrl = "http://localhost:3000/api/v1/questions"

export const handleSetQuestions = (questions) => {
    return { type: 'SET_QUESTIONS', questions: questions }
}

export const getQuestions = dispatch => {
    console.log(dispatch)
    fetch(questionsUrl, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(qData => {dispatch(handleSetQuestions(qData))})
}