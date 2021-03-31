import React from 'react';
import "./Navbar.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react';
import logo from './../../images/logo.png';
import home from './../../images/home.png'
function Navbar() {
    return (
        <div>
        <Menu  >
        <Container>
            <Image src={logo}  />
        
            <h1 className="Navbar__heading">Registration for additional courses lesson</h1>
            <Menu.Item position="right">
            <Button content='Sign up' secondary  />
            </Menu.Item>    
        </Container>
        </Menu> 
        <div>
        <Container fluid>
        <Image src={home}  className="Navbar__mainimage"/>
        </Container>
        </div>
       
      </div>
    )
}

export default Navbar