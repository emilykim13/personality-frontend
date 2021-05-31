import React from "react"
import HomeMenu from "./HomeMenu.js"
import TypesMenu from "./TypesMenu.js"

const Menu = () => { 

    return (
        <div className="home-menu">
            <ul className="hm-ul">
            <HomeMenu/>
            <TypesMenu/>
            </ul>
        </div>
    )
}
export default Menu;
  