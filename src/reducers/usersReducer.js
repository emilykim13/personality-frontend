const initialState = {
    users: [],
    loadUsers: false
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
            default: 
            return state
    }
}

export default usersReducer