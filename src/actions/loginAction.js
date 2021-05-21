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
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/api/v1/login", reqPackage)
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        // localStorage.profiles = data.profiles
        dispatch({type: "LOGIN_USER", user: data})
        {data.token ? history.push('/home') : history.push('/login')}
    })
    // console.log("YO")
}

export const handleLogout = (history, dispatch) => {
    localStorage.setItem("token", "")
    localStorage.clear()
    dispatch({type: "LOGOUT_USER"})
    history.push('/login')
    // console.log("localStorage cleared")
}