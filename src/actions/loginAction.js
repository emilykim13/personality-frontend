export const handleLogin = (logUser, history, dispatch) => {
    let user = {
        name: logUser[0].value,
        password: logUser[1].value
    }
    const reqPackage={
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/api/v1/login", reqPackage)
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        // localStorage.profiles = data.profiles
        dispatch({type: "LOGIN_USER", current_user: data, email: logUser[0].value})
        {data.token ? history.push('/home') : history.push('/login')}
    })
}

export const loadLogin = (dispatch) => {
    const reqPackage={
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    fetch("http://localhost:3000/api/v1/loadlogin", reqPackage)
    .then(res => res.json())
    .then(data => {
        dispatch({type: "GET_USERS", current_user: data})
        // {loadUsers ? history.push('/login') : history.push('/login')}
    })
    
    const personalitiesUrl = "http://localhost:3000/api/v1/personalities"
    const reqq ={
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
    }
    fetch(personalitiesUrl, reqq)
    .then(res => res.json())
    .then(pData => {
        dispatch({type: "SET_PERSONALITIES", personalities: pData})
    })
}

export const handleLogout = (history, dispatch) => {
    // localStorage.setItem("token", "")
    localStorage.clear()
    dispatch({type: "LOGOUT_USER"})
    history.push('/login')
}