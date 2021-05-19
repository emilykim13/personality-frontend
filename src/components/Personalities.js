import React from "react"
import { Redirect } from "react-router-dom"
class MyProfile extends React.Component {

  
    render() {
      return (
        <div>
          <h1>Ni haody, this is my components/Personalities.js</h1>
          <h2></h2>
          {/* {console.log(this.props)} */}
          <button onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/"/> : null} 
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default MyProfile;
  