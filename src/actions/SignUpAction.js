export const handleSignUp = (logUser, history, dispatch) => {
    let user = {
        name: logUser[0].value,
        email: logUser[1].value,
        password: logUser[2].value,
        password_confirmation: logUser[3].value
    }
    const reqPackage={
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({user: user})
    }
    fetch("http://localhost:3000/api/v1/signup", reqPackage)
    .then(res => res.json())
    .then(data => {
        {data.token === undefined ? history.push('/signup') : history.push('/login')}
        {data.token === undefined ? localStorage.clear() : history.push('/login')}
        {data.token === undefined ? alert("INVALID! TRY AGAIN.") : history.push('/login')}
        dispatch({type: "SIGN_UP"})
        localStorage.clear()
    })
}

