const initialState = {
    users: [],
    loadUsers: false,
    profiles: [],
    current_user: {}
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERS":
            console.log(action)
            return {
                ...state,
                users: action.users,
                loadUsers: true
            }
        case "GET_USERS":
            console.log(action)
            return {
                ...state,
                current_user: action.current_user,
                loadUsers: true
            }
            default: 
            return state
    }
}

export default usersReducer