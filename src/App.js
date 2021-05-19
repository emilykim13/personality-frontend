import './App.css';
import React from "react"
import MyPersonality from './components/MyPersonality.js'
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
    personalities: [],
    loggedIn: false
  }

  componentDidMount() {
    console.log("component mounted")
  }

  getPersonalities = () => {
    fetch("http://localhost:3000/api/v1/personalities", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(personData => {
      this.setState({ personalities: personData })
    })
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
      this.getPersonalities()
      this.setState({
        loggedIn: true
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

  render() {
    return (
      <div>
        <h1>Ni haody, this is my App.js</h1>
      <BrowserRouter>

        <Switch>

          <Route exact path="/">
            <Login handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/>
          </Route>

          <Route eaxct path="/myPersonality" render={(routerprops) =>
            (
            <MyPersonality 
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
