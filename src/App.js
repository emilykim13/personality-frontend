import './App.css';
import React, {useEffect} from "react"
import Routes from './Routes.js';
import {useDispatch, useSelector} from "react-redux"
import { loadLogin } from "./actions/loginAction"
import { getPersonalities } from './actions/getPersonalities';

const App = (props) => {
  let loadState = useSelector(state => state.usersState)
  let dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.token){
      loadLogin(dispatch);
      // getPersonalities(dispatch)
    }
  }, [])
  
    return (
      <div>
        <Routes/>
      </div>
    )
  }

export default App;
