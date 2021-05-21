import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import SignUp from "./components/SignUp.js"
import MyProfile from "./components/MyProfile.js"
import Personalities from "./components/Personalities.js"
import Header from './Header.js'
import { useSelector } from 'react-redux'

import Architect from "./pomponents/Architect.js"
import Logician from "./pomponents/Logician.js"
import Commander from "./pomponents/Commander.js"
import Debator from "./pomponents/Debator.js"
import Advocate from "./pomponents/Advocate.js"
import Mediator from "./pomponents/Mediator.js"
import Protagonist from "./pomponents/Protagonist.js"
import Campaigner from "./pomponents/Campaigner.js"
import Logistician from "./pomponents/Logistician.js"
import Defender from "./pomponents/Defender.js"
import Executive from "./pomponents/Executive.js"
import Consul from "./pomponents/Consul.js"
import Virtuoso from "./pomponents/Virtuoso.js"
import Adventurer from "./pomponents/Adventurer.js"
import Entreprenuer from "./pomponents/Entreprenuer.js"
import Entertainer from "./pomponents/Entertainer.js"
const Routes = (props) => {
    let logState = useSelector(state => state.loginState)
    return(
        <Router>
                {logState.loggedIn ? <Header /> : console.log("header not routed")}
            <Switch>
                <Route path='/login' exact component = { props => <Login {...props} /> } />
                <Route path='/signup' exact component = { props => <SignUp {...props} /> } />
                {logState.loggedIn ? <Route path='/home' exact component = { props => <Home {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/MyProfile' exact component = { props => <MyProfile {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/personalities' exact component = { props => <Personalities {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/architect' exact component = { props => <Architect {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/logician' exact component = { props => <Logician {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/commander' exact component = { props => <Commander {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/debator' exact component = { props => <Debator {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/advocate' exact component = { props => <Advocate {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/mediator' exact component = { props => <Mediator {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/protagonist' exact component = { props => <Protagonist {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/campaigner' exact component = { props => <Campaigner {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/logistician' exact component = { props => <Logistician {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/defender' exact component = { props => <Defender {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/executive' exact component = { props => <Executive {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/consul' exact component = { props => <Consul {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/virtuoso' exact component = { props => <Virtuoso {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/adventurer' exact component = { props => <Adventurer {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/entreprenuer' exact component = { props => <Entreprenuer {...props} /> } /> : <Redirect to="/login"/>}
                {logState.loggedIn ? <Route path='/entertainer' exact component = { props => <Entertainer {...props} /> } /> : <Redirect to="/login"/>}
            </Switch>
        </Router>
    )
}

export default Routes;