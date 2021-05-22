const initialState = {
    loadUsers: false,
    profiles: [],
    current_user: {},
    updated: false,
    deleted: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERS":
            // console.log(action)
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
        case "UPDATE_USER":
            return{
                ...state, 
                current_user: action.current_user,
                profiles: state.current_user.profiles,
                loadUsers: true,
                updated: true
            }
        // case "DELETE_USER":
        //     return {
        //         ...state,
        //         loadUsers: false,
        //         profiles: [],
        //         current_user: {},
        //         updated: false,
        //         deleted: true
        //     }
            default: 
            return state
    }
}

export default usersReducer