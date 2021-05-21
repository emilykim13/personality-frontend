const initialState = {
    personalities: [
        {name: ""}, 
        {letters: ""}, 
        {summary: ""}, 
        {image: ""}, 
        {introduction: ""}, 
        {intropp: ""}, 
        {image_two: ""}, 
        {firstpp: ""}, 
        {secondpp: ""}, 
        {thirdpp: ""}, 
        {fourthpp: ""}, 
        {fifthpp: ""}, 
        {firstheader: ""}, 
        {secondheader: ""}, 
        {thirdheader: ""}, 
        {fourthheader: ""}, 
        {fifthheader: ""}
    ],
    loadPersonalities: false
}

const personalitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_PERSONALITIES":
            console.log(action)
            return {
                ...state,
                personalities: action.personalities,
                loadPersonalities: true
            }
            default: 
            return state
    }
}

export default personalitiesReducer
