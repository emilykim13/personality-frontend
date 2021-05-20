import {createStore} from "redux"
import {combineReducers} from "redux"
import loginReducer from "./reducers/loginReducer"

const rootReducer = combineReducers({
    loginState: loginReducer

})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store