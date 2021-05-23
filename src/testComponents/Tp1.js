import React from 'react'
import {Link} from "react-router-dom"

const tp1 = () => {
    return (
        <div>
            <h1>test page 1</h1>
            <Link to="/tp2" className="menu-btn">Next page</Link>
        </div>
    )
}

export default tp1
