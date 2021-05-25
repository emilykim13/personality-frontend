import React, {useState} from "react"
import HomeMenu from "./HomeMenu.js"
import TypesMenu from "./TypesMenu.js"

const Menu = (props) => { 

    return (
        <div className="home-menu">
            <ul className="hm-ul">
            <p>This is my Menu.js</p>
            <HomeMenu/>
            {/* <TypesMenu/> */}
            </ul>
        </div>
    )
}
export default Menu;
  