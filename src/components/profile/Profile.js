import React from 'react'
import profilepicture from "../../img/profilepicture.jpg"
import postpicture from "../../img/profilepicture_min.jpg"
import "./profile.css"

function Profile() {
  return (

    <div className="profile">
      <div className="me">
        <img src={profilepicture} alt="profile mini photo cute cat" />
        <p>Богдан Граур</p>
      </div>
      <div className="posts">
        <input placeholder='enter the post' />
        <button>Add post</button>
        <div className='post'>
          <img src={postpicture} alt="cute cat but smaller" />
          <span>Graur Bogdan</span>
          <p>Some text</p>
        </div>
      </div>
    </div>

  )
}

export default Profile