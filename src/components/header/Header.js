import React from "react"
import './header.css'
import profilepicture from "../../img/profilepicture.jpg"


function Header() {
  return (

    <div className="header">
      <img src={profilepicture} />
    </div>

  )
}

export default Header