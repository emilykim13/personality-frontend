import React from "react"
import { Redirect } from "react-router-dom"
class MyProfile extends React.Component {

  
    render() {
        // console.log(this.props)
      return (
        <div>
          <h1>Ni haody, this is my components/Personalities.js</h1>
          <button className="menu-btn" onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/login"/> : null} 
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default MyProfile;
  