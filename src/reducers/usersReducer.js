const initialState = {
    username: null,
    password: null,
    loggedIn: false,
    loadUsers: false,
    profiles: [],
    current_user: {},
    updated: false,
    deleted: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
            ...state,
            username: action.username,
            password: action.password,
            loggedIn: true,
            current_user: action.current_user
            }
        case 'LOGOUT_USER':
            return {
            ...state,
            username: null,
            password: null,
            loggedIn: false,
            current_user: null
            }
        case "SET_USERS":
            // console.log(action)
            return {
                ...state,
                users: action.users,
                loadUsers: true
            }
        case "GET_USERS":
            // console.log(action)
            return {
                ...state,
                current_user: action.current_user,
                loadUsers: true
            }
        case "UPDATE_USER":
            return{
                ...state, 
                current_user: action.current_user,
                profiles: state.current_user.profiles,
                loadUsers: true,
                updated: true
            }
            default: 
            return state
    }
}

export default usersReducer