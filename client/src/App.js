import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './stylesheets/templates.css'
import 'semantic-ui-css/semantic.min.css';
import httpClient from './httpClient';
import './App.css';
import NavigationBar from './views/SemanticNavBar.js';
import SignUp from './views/User/SignUp';
// import ModalSignUp from './views/ModalSignUp';
import LogIn from './views/User/LogIn'
// import ModalLogIn from './views/ModalLogIn'

import LogOut from './views/User/LogOut'
import Home from './views/Home';
import Profile from './views/User/Profile.js'
import EditResume from './views/Templates/editResume.js'
import Aresume from './views/Templates/Aresume.js'
import PublicResumes from './views/Templates/PublicResumes.js'
import NewResume from './views/Templates/NewResume.js'
import Template1 from './views/Templates/Template1.js'
import Template2 from './views/Templates/Template2.js'
import Template3 from './views/Templates/Template3.js'
import Template4 from './views/Templates/Template4.js'
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  state = { 
    currentUser: httpClient.getCurrentUser()
 
  }

	onLoginSuccess(user) {
		this.setState({ 
      currentUser: httpClient.getCurrentUser() 
    })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ 
      currentUser: null 
    })
  }
  
  render() {
    const {currentUser} = this.state

    return (
      <div className="App">
      <NavigationBar currentUser={currentUser}/>
        <Switch>
            <Route path="/login" render={(props) => {
              return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
            }} />
            
            <Route path="/logout" render={(props) => {
              return <LogOut onLogOut={this.logOut.bind(this)} />
            }} />
            
            <Route path="/signup" render={(props) => {
              return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
            }} />

            <Route path="/profile" render={(routeProps)=>{
              return <Profile {...routeProps} currentUser={currentUser}/>
            }} />

            <Route path="/resumes/:id/edit" render={(routeProps)=>{
              return currentUser
              ? <EditResume currentUser={currentUser} {...routeProps} />
              : <Redirect to="/login"/>
            }} />
            <Route path="/resumes" component={PublicResumes} />
            
            <Route path="/resume" component={Aresume} />

            <Route path="/templates/newresume" component={NewResume} />
            <Route path="/template4" component={Template4} />  
            <Route path="/template3" component={Template3} />  
            <Route path="/template2" component={Template2} />             
            <Route path="/template1" component={Template1} />
            {/* <Route path="/templates" component={Templates} />   */}
            
            <Route path="/" component={Home} />

        </Switch>

      </div>
    );
  }
}

export default App;
