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
  
    return (
      <div>
        <Routes/>
      </div>
    )
  }

export default App;
