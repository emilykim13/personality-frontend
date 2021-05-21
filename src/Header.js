import React from "react"
import { Redirect } from "react-router-dom"
import Menu from "./components/Menu.js"


const Header = () => {
      return (
        <div>
          <h1>Ni haody, this is my Header.js</h1>
          <Menu />
        </div>
      )
    }
export default Header;