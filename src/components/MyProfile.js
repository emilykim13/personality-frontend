import React from "react"
import { Redirect } from "react-router-dom"
class MyProfile extends React.Component {

  
    render() {
      return (
        <div>
          <h1>Ni haody, this is my components/MyProfile.js</h1>
          <p>{console.log(this.props)}</p>
          {/* <button onClick={this.props.handleHome}>Home</button>
          {!this.props.home ? <Redirect to="/home"/> : null}  */}
          <button onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/"/> : null} 
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default MyProfile;
  