const initialState = {
    personalities: [],
    loadPersonalities: false
}

const personalitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_PERSONALITIES":
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
