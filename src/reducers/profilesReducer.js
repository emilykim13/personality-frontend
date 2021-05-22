const initialState = {
    profiles: [],
}


const profilesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_PROFILES':
            return {
                ...state,
                profiles: action.profiles
            }
        default:
            return state
    }
}

export default profilesReducer