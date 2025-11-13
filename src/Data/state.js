

let state = {
    profilePage: {
        postsData: [{ comment: 'comment', id: 1, like: 3 },
        { comment: 'reply', id: 2, like: 0 },
        { comment: 'reply 2', id: 3, like: 4 },
        { comment: 'reply 3', id: 4, like: 1 }],
    },
    dialogsPage: {
        dialogData: [{ name: 'No name', id: 1 },
        { name: 'anonymus user', id: 2 },
        { name: 'bill gates', id: 3 },
        { name: 'joe biden', id: 4 }],
        messageData: [{ message: 'hello', id: 1 },
        { message: 'free fortnite vbucks', id: 2 },
        { message: 'im smart', id: 3 },
        { message: 'im not a president', id: 4 }]
    },
    navbar: {
        friends: [{ img: '../img/profilepicture_min.jpg', name: 'Elon' },
        { img: '../img/profilepicture_min.jpg', name: 'Bill' },
        { img: '../img/profilepicture_min.jpg', name: 'Joe' }]    
    }
}

export let addPost = (postText) => {
        let newPost={
            text: postText,
            id: 4,
            likes: 0,
        }
        state.profilePage.postsData.push(newPost)
        console.log(state)
    }

export let sendMessage =(message) => {
        let newMessage={
            id: 4,
            text: message,
        }
        state.dialogsPage.messageData.push(newMessage)
        console.log(state)
}

export default state