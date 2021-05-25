
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


export const handleResponses = (e, test_id, quest_id, dispatch) => {
    var rowsA = []
    var rowsB = []
    for ( var i = 0; i < 420; i++) {
        {
            rowsA.push(e.target[i].value); 
            rowsB.push(e.target[i].checked)
        }}
    console.log(rowsA, rowsB)
    const indices = rowsB.reduce(
        (out, bool, index) => bool ? out.concat(index) : out, 
        []
      )
    // console.log(indices)

    // 60 responses 
    var indicesA = indices.map(index => rowsA[index])
    console.log(indicesA)
    let responses = {
        test_id: test_id,
        question_id: quest_id,
        resps: indicesA
    }

    const req ={
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({resdata: responses})
    }
    fetch("http://localhost:3000/api/v1/resdata", req)
    .then(res => res.json())
    .then(dataR => {
        dispatch({type: "SET_RESULTS", test: dataR.test, results: dataR.results, responses: dataR})
    })


}
