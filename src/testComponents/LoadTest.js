import React from 'react'
import { handletest } from '../actions/testAction'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const LoadTest = (props) => {
    const user = useSelector(state => state.usersState.current_user.user)
    const dispatch = useDispatch()
    console.log(user)
    return (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                handletest(user, dispatch, props.history)
                }}>
                <h1>Are you ready to find WhoRU?</h1>
                <Link to="/home" className="menu-btn">NOPE</Link>
                <br/><br/><br/><br/>
                <input className="menu-btn" type="submit" value="YUP"/>
            </form>
        </div>
    )
}

export default LoadTest
