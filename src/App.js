  import React from 'react'
  import './App.css'
  import Header from'./components/header/Header.js'
  import Navbar from './components/navbar/Navbar.js'
  import Profile from './components/profile/Profile.js'
  import Dialogs from './components/dialogs/Dialogs.js'
  import Feeed from './components/feed/Feeed.js'
  import Friends from './components/friends/Friends.js'
  import {BrowserRouter, Route, Switch} from 'react-router-dom'

  function App(props) {
    return (
      
        <div className="wrapper">
          <BrowserRouter> 
            <Header/>
            <Navbar navMenu={props.state.navbar}/>
            <Switch>
              <Route exact path='/' render={()=><Profile commentItems={props.state.profilePage} addPost={props.addPost}/>}/>
              <Route exact path='/profile' render={()=><Profile commentItems={props.state.profilePage} addPost={props.addPost}/>} />
              <Route exact path='/dialogs' render={()=><Dialogs dialogNames={props.state.dialogsPage} messageItems={props.state.dialogsPage} sendMessage={props.state.sendMessage}/>} />
              <Route exact path='/feed' render={()=><Feeed/>} />
              <Route exact path='/friends' render={()=><Friends />} />
            </Switch>
          </BrowserRouter> 
        </div>  
    )
  }
export default App






    //   https://ru.legacy.reactjs.org/docs/components-and-props.html
    //  https://ru.legacy.reactjs.org/docs/glossary.html