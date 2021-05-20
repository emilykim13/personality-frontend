import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./components/Home.js"
import Login from "./components/Login.js"
// import Menu from "./components/Menu.js"
import MyProfile from "./components/MyProfile.js"
import Personalities from "./components/Personalities.js"

const Routes = (props) => {
    return(
        <Router>
            <Switch>
                <Route path='/home' exact component = { props => <Home {...props} /> } />
                <Route path='/login' exact component = { props => <Login {...props} /> } />
                <Route path='/MyProfile' exact component = { props => <MyProfile {...props} /> } />
                <Route path='/Personalities' exact component = { props => <Personalities {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes;