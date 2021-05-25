import React from 'react'
const initialState = {
    test: {}
}

const testsReducer = (state= initialState, action) => {
    switch(action.type){
            case 'SET_TEST':
            return {
                ...state,
                test: action.test
            }
            default:
            return state
    }
}

export default testsReducer
