import React from 'react'
import ava_min from "../../../img/profilepicture_min.jpg"
import Post from './post/Post'
let postText = React.createRef()

function Posts(props) {
    let addPost = () => {
        props.addPost(postText.current.value)
    }
    return (

        <div className="posts">
            <h2>My posts</h2>
            <input ref={postText} placeholder="enter the post" />
            <button onClick={addPost}>Add post</button>
            <div className='comments'>
                {props.commentItems.map((e) => <Post message={e.comment} id={e.id} likes={e.like} />)}
            </div>
        </div>

    )
}



export default Posts




