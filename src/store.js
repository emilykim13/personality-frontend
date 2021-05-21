import {combineReducers, applyMiddleware, createStore, compose} from "redux"
import loginReducer from "./reducers/loginReducer"
import personalitiesReducer from "./reducers/personalitiesReducer"
import usersReducer from "./reducers/usersReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    loginState: loginReducer,
    personalitiesState: personalitiesReducer,
    usersState: usersReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))

export default store