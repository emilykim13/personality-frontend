import React from "react"
import { Redirect } from "react-router-dom"
class MyPersonality extends React.Component {

  
    render() {
      return (
        <div>
          <h1>Ni haody, this is my components/MyPersonality.js</h1>
          <p>{console.log(this.props.personalities)}</p>
          <button onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/"/> : null}
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default MyPersonality;
  