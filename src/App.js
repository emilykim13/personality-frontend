import './App.css';
import React, {useEffect} from "react"
import Header from './Header.js'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"
import Routes from './Routes.js';
import {useDispatch} from "react-redux"

const App = () => {

  // const dispatch = useDispatch()

  // useEffect(()=> {
  //   fetch("http://localhost:3000/api/v1/personalities", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type" : "application/json",
  //       "Accept" : "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(personalityData => {console.log(personalityData)
  //   })
  // }, [])

    return (
      <div>
        <Routes/>
      </div>
    )
  }

export default App;
