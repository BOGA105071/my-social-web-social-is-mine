import React from "react"
import profilepicture from "../../../img/profilepicture.jpg"

function ProfileInfo(props){
    return(
        <div className="me">
            <img src={profilepicture} alt='my photo'/>
            <p>ELon MAskss</p>
        </div>
    )
}
export default ProfileInfo