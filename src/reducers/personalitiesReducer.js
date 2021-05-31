const initialState = {
    personalities: []
}

const personalitiesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_PERSONALITIES":
            return {
                ...state,
                personalities: action.personalities
            }
            default: 
            return state
    }
}

export default personalitiesReducer
