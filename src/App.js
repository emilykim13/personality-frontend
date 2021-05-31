import './App.css';
import React, {useEffect} from "react"
import Routes from './Routes.js';
import {useDispatch, useSelector} from "react-redux"
import { loadLogin } from "./actions/loginAction"

const App = () => {
  const loggedIn = useSelector(state => state.usersState.loggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    if(loggedIn === true){
    loadLogin(dispatch)}
  },[loggedIn]);

    return (
      <div>
        <Routes/>
      </div>
    )
  }

export default App;
