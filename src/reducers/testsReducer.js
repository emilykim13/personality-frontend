import React from 'react'
const initialState = {
    test: {},
    results: {},
    responses: []
}

const testsReducer = (state= initialState, action) => {
    switch(action.type){
            case 'SET_TEST':
            return {
                ...state,
                test: action.test
            }
            case 'SET_RESULTS':
            return {
                ...state,
                test: action.test,
                p_results: action.p_results
            }
            default:
            return state
    }
}

export default testsReducer
