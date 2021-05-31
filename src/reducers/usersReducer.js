const initialState = {
    username: null,
    email: null,
    password: null,
    loggedIn: false,
    loadUsers: false,
    current_user: {},
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
            ...state,
            username: action.username,
            email: action.email,
            password: action.password,
            loggedIn: true,
            current_user: action.current_user
            }
        case 'LOGOUT_USER':
            return {
            ...state,
            username: null,
            email: null,
            password: null,
            loggedIn: false,
            loadUsers: false,
            current_user: {}
            }
        case "SET_USERS":
            // console.log(action)
            return {
                ...state,
                users: action.users,
                loadUsers: true
            }
        case "SET_USER":
            // console.log(action)
            return {
                ...state,
                current_user: action.current_user
                // loadUsers: true
            }
        case "UPDATE_USER":
            console.log(action)
            return{
                ...state, 
                current_user: action.current_user
                // profiles: action.current_user.profiles,
                // tests: action.current_user.tests,
                // loadUsers: true
                // updated: !state.updated
            }
            default: 
            return state
    }
}

export default usersReducer