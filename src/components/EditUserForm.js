import React from 'react'
import { updateUser } from "../actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteUser } from '../actions/userAction'

const EditUserForm = (props) => {
    const uState = useSelector(state => state.usersState)
    const myAccount = useSelector(state => state.usersState.current_user.user)
    const dispatch = useDispatch()

    return (
        <div>
            <form onSubmit={(e) => 
                {e.preventDefault() 
                dispatch(updateUser(e, myAccount))}
                }> 
                <h1>Update account information: </h1>
                <label>name:</label>
                <input required defaultValue={myAccount.name} type="text"/>
                <br/>
                <label>email</label>
                <input required defaultValue={myAccount.email}type="text"/>
                <br/>
                {/* <label>password</label>
                <input required type="password"/> */}
                <br/>
                <input className="menu-btn" type="submit" value="Update"/>
            </form>
                {/* {<Redirect to="/home"/>} */}

            {/* // <button onClick={(e)=> {
            //     e.preventDefault() 
            //     dispatch(deleteUser(myAccount))}}>
            //     DELETE MY ACCOUNT
            // </button> */}
          {/* {uState.deleted ? <Redirect to="/login" /> : <Redirect to="/home"/>} */}
        </div>
    )
}

export default EditUserForm
