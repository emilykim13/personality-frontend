import React, {useEffect} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import SignUp from "./components/SignUp.js"
import MyProfile from "./components/MyProfile.js"
import Personalities from "./components/Personalities.js"
import EditUserForm from "./components/EditUserForm.js"
import DeleteUser from "./components/DeleteUser.js"
import Header from './Header.js'
import { useSelector, useDispatch } from 'react-redux'
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
import Results from "./testComponents/Results.js"
import Tp1 from "./testComponents/Tp1.js"
import StartTest from "./testComponents/StartTest.js"
import LoadTest from "./testComponents/LoadTest.js"

const Routes = () => {
    const loading = useSelector(state => state.usersState)
    return(
        <Router>
                {localStorage.token ? <Header /> : console.log("header not routed")}
                {!localStorage.token && (localStorage.token === undefined) && <Redirect to="/login"/>}
        {/* note: just another way to do the logical AND conditional below commented out */}
                {/* {!localStorage.token ? <Redirect to="/login"/> : null}
                {localStorage.token === undefined ? <Redirect to="/login"/> : null} */}
            <Switch>
                <Route path='/login' exact component = { props => <Login {...props} /> } />
                <Route path='/signup' exact component = { props => <SignUp {...props} /> } />
                <Route path='/home' exact component = { props => <Home {...props} /> } />
                <Route path='/MyProfile' exact component = { props => <MyProfile {...props} /> } />
                <Route path='/personalities' exact component = { props => <Personalities {...props} /> } />
                <Route path='/editAccount' exact component = { props => <EditUserForm {...props} /> } />
                <Route path='/architect' exact component = { props => <Architect {...props} /> } />
                <Route path='/logician' exact component = { props => <Logician {...props} /> } />
                <Route path='/commander' exact component = { props => <Commander {...props} /> } />
                <Route path='/debator' exact component = { props => <Debator {...props} /> } />
                <Route path='/advocate' exact component = { props => <Advocate {...props} /> } />
                <Route path='/mediator' exact component = { props => <Mediator {...props} /> } />
                <Route path='/protagonist' exact component = { props => <Protagonist {...props} /> } />
                <Route path='/campaigner' exact component = { props => <Campaigner {...props} /> } />
                <Route path='/logistician' exact component = { props => <Logistician {...props} /> } />
                <Route path='/defender' exact component = { props => <Defender {...props} /> } />
                <Route path='/executive' exact component = { props => <Executive {...props} /> } />
                <Route path='/consul' exact component = { props => <Consul {...props} /> } />
                <Route path='/virtuoso' exact component = { props => <Virtuoso {...props} /> } />
                <Route path='/adventurer' exact component = { props => <Adventurer {...props} /> } />
                <Route path='/entreprenuer' exact component = { props => <Entreprenuer {...props} /> } />
                <Route path='/entertainer' exact component = { props => <Entertainer {...props} /> } />
                <Route path='/tp1' exact component = { props => <Tp1 {...props} /> } />
                <Route path='/results' exact component = { props => <Results {...props} /> } />
                <Route path='/startTest' exact component = { props => <StartTest {...props} /> } />
                <Route path='/delete' exact component = { props => <DeleteUser {...props} /> } />
                <Route path='/loadTest' exact component = { props => <LoadTest {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes;