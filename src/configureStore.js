// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import rootReducer from './rootReducer'
// import thunk from "redux-thunk"
// import {applyMiddleware, createStore} from "redux"

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
//     let persistor = persistStore(store)
//     return { store, persistor}
// }
