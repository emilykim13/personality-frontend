import React from "react"
import { Redirect } from "react-router-dom"
class Home extends React.Component {

  
    render() {
      return (
        <div>
          <h1>Ni haody, this is my components/Home.js</h1>
          {/* <p>{console.log(this.props.personalities)}</p> */}
          <button onClick={this.props.handleProfile}>Profile</button>
          {!this.props.profile ? <Redirect to="/MyProfile"/> : null}
          {/* stopped here */}
          <br/><br/>
          <button onClick={this.props.handleLogout}>Logout</button>
          {!this.props.loggedIn ? <Redirect to="/"/> : null}
          {/* this.props.history.push("/") */}
        </div>
      )
    }
  }
  
  export default Home;
  