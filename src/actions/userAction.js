// export const deleteUser = (user) => {
//     return dispatch => {
//         fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
//             method:"DELETE",
//             headers: {
//                 Authorization: `Bearer ${localStorage.token}`
//             }
//         },
//             dispatch({type: "DELETE_USER"})
//         )
//     }
// }

export const updateUser = (e, user) => {
    return dispatch => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value
                
                })
            })
            .then(res=>res.json())
            .then(updatedUser => {
            dispatch({type: "UPDATE_USER", current_user: updatedUser})
        })
    }
}