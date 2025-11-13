import React from 'react'
import ava_min from '../../../../img/profilepicture_min.jpg'

function Post(props) {

    return(

        <div className='post'>
        
            <img src={ava_min} alt="profile picture mini" />
            <span>Bogdan Graur</span>
            <p>{props.message}</p>
            <span>{props.likes}</span>  likes
                  

        </div>

    )

}

export default Post