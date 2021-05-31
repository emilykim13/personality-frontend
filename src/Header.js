import React from "react"
import { Redirect } from "react-router-dom"
import Menu from "./components/Menu.js"


const Header = () => {
      return (
        <div className="App">
          
            <img className="head-img-band" src="https://live-production.wcms.abc-cdn.net.au/ec9de9743a21adc30a3716cb91347c85?impolicy=wcms_crop_resize&cropH=1069&cropW=1898&xPos=16&yPos=0&width=862&height=485"></img><br/><br/>

          <Menu />
        </div>
      )
    }
export default Header;