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
            return {
                ...state,
                users: action.users,
                loadUsers: true
            }
        case "SET_USER":
            return {
                ...state,
                current_user: state.current_user
                // note: fetch is made to /loadlogin in rails but does not get used
            }
        case "UPDATE_USER":
            console.log(action)
            return{
                ...state, 
                current_user: action.current_user
            }
            default: 
            return state
    }
}

export default usersReducer