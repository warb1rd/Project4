import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import ModalSignUp from './ModalSignUp';

class NavigationBar extends Component { 
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
//show visibility and by clicking anywhere on the screen it should toggle back. User shouldnt have to click on sidebar to make nav invis again
  handleClick(){     
    console.log("clicked menu")
  }

  render() {
    const {visible} = this.state
    return (
      <div className="NavBar">
        <Icon onClick={this.toggleVisibility} name="sidebar" size="big"/>
        <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
                
                <Menu.Item name='home' >
                    <Link to="/">HOME </Link>
                    <Icon name='home' />
                </Menu.Item>
        {this.props.currentUser
            ?   (<span>
                    <Menu.Item name='templates'>
                        <Link to="/templates">TEMPLATES </Link>
                        <Icon name='block layout' />
                    </Menu.Item>
                    <Menu.Item name='print' onClick={ () => window.print()}>
                        PRINT
                        <Icon name='print' />
                    </Menu.Item>
                    <Menu.Item name='logout'>
                        <Link to="/logout">LOGOUT </Link>
                        <Icon name='log out' />
                    </Menu.Item>
                    <Menu.Item name='profile'>
                        <Link to="/profile">PROFILE </Link>
                        <Icon name='user' />
                    </Menu.Item>
                </span>
            )
            :(    <span>
                    <Menu.Item name='login' >
                        <Link to="/login">LOGIN </Link>
                        <Icon name='sign in' />
                    </Menu.Item>

                    <Menu.Item name='signUp'>
                        <Link to="/signup">SIGNUP </Link>
                        <Icon name='wpforms' />
                        {/* <ModalSignUp/> */}
                    </Menu.Item>x
                </span>  
            )     
        } 
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'></Header>
                </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default NavigationBar
