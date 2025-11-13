import React from 'react'
import postpicture from "../../img/profilepicture_min.jpg"
import "./profile.css"
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo'



function Profile(props) {
  return (

    <div className="profile">
      <ProfileInfo />
      <Posts commentItems={props.commentItems.postsData} addPost={props.addPost}/>
    </div>


  )
}

export default Profile




