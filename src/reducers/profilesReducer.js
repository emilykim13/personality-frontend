const initialState = {
    profiles: [],
    current_profile: []
}


const profilesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_PROFILES':
            return {
                ...state,
                profiles: action.profiles,
                current_profile: action.profile
            }
        default:
            return state
    }
}

export default profilesReducer