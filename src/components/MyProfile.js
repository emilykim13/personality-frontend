import React from "react"
import { Redirect } from "react-router-dom"
class MyProfile extends React.Component {

  
    render() {

      return (
        <div>
          <h1>Ni haody, this is my components/MyProfile.js</h1>
          <h2>{this.props.profiles[0].name}</h2>
          <h4>{this.props.profiles[0].personality_character}: {this.props.profiles[0].personality_letters}</h4>
          <h4>{this.props.profiles[0].personality_letters}</h4>
      {/* personality id: {this.props.profiles[0].personality_letters} */}
          <button className="menu-btn" onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/login"/> : null} 
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default MyProfile;
  