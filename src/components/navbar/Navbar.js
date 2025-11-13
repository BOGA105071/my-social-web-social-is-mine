import React from "react"
import "./navbar.css"
import {NavLink} from 'react-router-dom'
function Navbar(props) {
  return (

    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to='/dialogs'>Dialogs</NavLink>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to='/friends'>Friends</NavLink>
      <div className='friends'>
          <p>Friends</p>
          {props.navMenu.friends.map((e)=>{
            return(
              <NavLink to='/dialogs'>
                <img src={e.img} />
                <br/>
                <p>{e.name}</p>
              </NavLink>


              
            )
          })}
      </div>
    </div>

  )
}

export default  Navbar


