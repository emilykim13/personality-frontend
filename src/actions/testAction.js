export const handleResponses = (test) => {
    let response = {
        test_id: test.id
    }
}

export const handletest = (user, dispatch, history) => {
    let test = {
        user_id: user.id
    }
    const reqPackage={
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({test: test})
    }
    fetch("http://localhost:3000/api/v1/tests", reqPackage)
    .then(res => res.json())
    .then(data => {
        dispatch({type: "SET_TEST", test: data})
        history.push('/startTest')
    })
}