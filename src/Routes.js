import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./components/Home.js"
import Login from "./components/Login.js"
import SignUp from "./components/SignUp.js"
// import Menu from "./components/Menu.js"
import MyProfile from "./components/MyProfile.js"
import Personalities from "./components/Personalities.js"
import Header from './Header.js'
import { useSelector } from 'react-redux'

const Routes = (props) => {
    let logState = useSelector(state => state.loginState)
    return(
        <Router>
                {logState.loggedIn ? <Header /> : console.log("header not routed")}
            <Switch>
                <Route path='/login' exact component = { props => <Login {...props} /> } />
                <Route path='/signup' exact component = { props => <SignUp {...props} /> } />
                {/* <Header/> */}
                <Route path='/home' exact component = { props => <Home {...props} /> } />
                <Route path='/MyProfile' exact component = { props => <MyProfile {...props} /> } />
                <Route path='/personalities' exact component = { props => <Personalities {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes;