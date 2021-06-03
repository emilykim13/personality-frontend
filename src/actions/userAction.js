export const deleteUser = () => (dispatch) => {
    console.log("hi")
    fetch(`http://localhost:3000/api/v1/destroy`, {
        method:"DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(localStorage.clear())
    .then(dispatch({type: "LOGOUT_USER"}))
}

export const updateUser = (e, user, history) => {
    return dispatch => {
        e.preventDefault()
        let profile = {
            user_id: user.id,
            username: e.target[0].value,
            email: e.target[1].value,
            first_name: e.target[2].value,
            last_name: e.target[3].value,
            photo: e.target[4].value
        }
        const reqPackage={
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({profile: profile})
        }
        fetch("http://localhost:3000/api/v1/createprofile", reqPackage)
        .then(res => res.json())
        .then(data =>
            dispatch({type: "SET_PROFILES", profiles: data.profiles, profile: data.profile})
        )
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value
                })
            })
            .then(res=>res.json())
            .then(updatedUser => {
            dispatch({type: "UPDATE_USER", current_user: updatedUser})
            history.push('/home')
        })
    }
}