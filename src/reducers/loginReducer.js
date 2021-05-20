const initialState = {
    username: null,
    password: null,
    loggedIn: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
            ...state,
            username: action.username,
            password: action.password,
            loggedIn: !state.loggedIn
            }
        case 'LOGOUT_USER':
            return {
            ...state,
            username: null,
            password: null,
            loggedIn: !state.loggedIn
            }
        default: 
        return state
    }
}

export default loginReducer