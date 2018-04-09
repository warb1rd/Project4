import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import httpClient from './httpClient';

import NavigationBar from './views/SemanticNavBar.js';
import SignUp from './views/SignUp';
// import ModalSignUp from './views/ModalSignUp';
import LogIn from './views/LogIn'
// import ModalLogIn from './views/LogIn'

import LogOut from './views/LogOut'
import Home from './views/Home';
// import PrintButton from './views/NavigationButtons/Print.js';

import Templates from './views/Templates.js'
import NewResume from './views/NewResume.js'
import Atemplate from './views/Atemplate.js'
import Template2 from './views/Template2.js'
import Template3 from './views/Template3.js'
import Template4 from './views/Template4.js'

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
            {/* <Route path="/templates/print" component={PrintButton} /> */}

            <Route path="/templates/newresume" component={NewResume} />
            <Route path="/templates/template4" component={Template4} />  
            <Route path="/templates/template3" component={Template3} />  
            <Route path="/templates/template2" component={Template2} />             
            <Route path="/templates/atemplate" component={Atemplate} />
            <Route path="/templates" component={Templates} />  
            
            <Route path="/" component={Home} />

        </Switch>

      </div>
    );
  }
}

export default App;
