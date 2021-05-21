import './App.css';
import React, {useEffect} from "react"
import Routes from './Routes.js';
import {useDispatch, useSelector} from "react-redux"
import { loadLogin } from "./actions/loginAction"
import {Redirect} from "react-router-dom"
const App = (props) => {
  let loadState = useSelector(state => state.usersState)
  let dispatch = useDispatch()

  useEffect(() => {
    // {loadState ? <Redirect to="/login" /> : console.log("nope - loadLogin")}
    if(localStorage.token){
      loadLogin(dispatch)
    }
  }, [])
  
    return (
      <div>
        <Routes/>
      </div>
    )
  }

export default App;
