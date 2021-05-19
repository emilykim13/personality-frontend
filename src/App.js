import './App.css';
import React from "react"
import MyProfile from './components/MyProfile.js'
import Personalities from './components/Personalities.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"

class App extends React.Component {
  state={
    profiles: [],
    personalities: [],
    loggedIn: false,
    profile: false
    // home: false
  }

  componentDidMount() {
    console.log("component mounted")
    fetch("http://localhost:3000/api/v1/personalities", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
        // "Authorization" : `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(personalityData => 
      // console.log(personalityData)
      {
      this.setState({ personalities: personalityData })
    }
    )
  }

  getProfiles = () => {

    // fetch("http://localhost:3000/api/v1/profiles", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type" : "application/json",
    //     "Accept" : "application/json",
    //     "Authorization" : `Bearer ${localStorage.token}`
    //   }
    // })
    // .then(res => res.json())
    // .then(personData => {
    //   this.setState({ profiles: personData })
    // })
  }
  
  handleLogin = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    let reqPackage = {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(user)
    }

    fetch('http://localhost:3000/api/v1/login', reqPackage)
    .then(res => res.json())
    .then(data => 
      {
      localStorage.setItem("token", data.token)
      // this.getProfiles()
      this.setState({
        loggedIn: true,
        profiles: data.profiles
      })
      }
    )
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false

    })
  }

  handleProfile = () => {
    this.setState({
      profile: true
    })
  }

  render() {
    return (
      <div>
        <h1>Ni haody, this is my App.js</h1>
      <BrowserRouter>

        <Switch>

          <Route exact path="/">
            <Login handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/>
          </Route>

          <Route eaxct path="/MyProfile" render={(routerprops) =>
            (
            <MyProfile 
            profiles={this.state.profiles} 
            handleLogout={this.handleLogout} 
            {...routerprops}
            loggedIn={this.state.loggedIn}
            handleHome={this.handleHome}
            />)
            }>
          </Route>

          <Route eaxct path="/home" render={(routerprops) =>
            (
            <Home 
            profiles={this.state.profiles} 
            handleLogout={this.handleLogout} 
            {...routerprops}
            loggedIn={this.state.loggedIn}
            profile={this.state.profile}
            />)
            }>
          </Route>

          <Route exact path="/personalities" render={(routerprops) =>
          (<Personalities 
            personalities={this.state.personalities}
            handleLogout={this.handleLogout} 
            {...routerprops}
            loggedIn={this.state.loggedIn}
            />)
          }>
          </Route>

        </Switch>
      </BrowserRouter>



      </div>
    )
  }
}

export default App;
