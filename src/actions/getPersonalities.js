const personalitiesUrl = "http://localhost:3000/api/v1/personalities"

export const handleSetPersonalities = (personalities) => {
    return { type: 'SET_PERSONALITIES', personalities }
}

export const getPersonalities = dispatch => {
    console.log(dispatch)
    fetch(personalitiesUrl, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(pData => {dispatch(handleSetPersonalities(pData))})
}