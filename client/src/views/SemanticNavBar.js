import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import PrintButton from './NavigationButtons/Print.js';

// import ModalSignUp from './ModalSignUp';

class NavigationBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
//show visibility and by clicking anywhere on the screen it should toggle back. User shouldnt have to click on sidebar to make nav invis again
  handleClick(){     
    console.log("clicked menu")
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Icon onClick={this.toggleVisibility} name="sidebar" size="big"/>
        <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
                
                <Menu.Item name='home' >
                    <Icon name='home' />
                    <Link to="/">HOME</Link>
                </Menu.Item>

                <Menu.Item name='login' >
                    <Link to="/login">LOGIN</Link>
                    <Icon name='sign in' />
                </Menu.Item>

                <Menu.Item name='signUp'>
                <Link to="/signup">SIGNUP</Link>
                    <Icon name='wpforms' />
                    {/* <ModalSignUp/> */}
                </Menu.Item>

                <Menu.Item name='templates'>
                    <Link to="/templates">TEMPLATES</Link>
                    <Icon name='block layout' />
                </Menu.Item>

                <Menu.Item name='print'>
                    <Link to="/templates/print">PRINT</Link>
                    <Icon name='print' />
                </Menu.Item>
                
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
