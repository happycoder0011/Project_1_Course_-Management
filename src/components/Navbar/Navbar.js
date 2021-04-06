import React,{useState,useEffect} from 'react';
import "./Navbar.css";
import {
  Button,
  Container,
  Image,
  Menu,
  } 
from 'semantic-ui-react';
import logo from './../../images/logo.png';
import { Link } from 'react-router-dom';
import * as ROUTES from './../../routes';
import {logout} from './../../firebase';

function Navbar() {
   console.log("its from the navbar"+localStorage.getItem("uid"))
   
   var user = localStorage.getItem("uid");

   const handleclick = () => {
     logout();
     localStorage.clear();
   }
    return (
        <div>
        <Menu  >
        <Container>
            <Image src={logo}  />
        
            <h1 className="Navbar__heading">Registration for additional courses lesson</h1>
            <Menu.Item position="right">
           <Link to={ROUTES.SIGNUPOPTIONS}> <Button content='Sign up' secondary  /></Link>
           { user ? <Link to={ROUTES.HOME}> <Button content='Sign Out' secondary onClick={handleclick} /></Link>:
           <Link to={ROUTES.HOME}> <Button content='Login' secondary  /></Link>}
           
           </Menu.Item>    
        </Container>
        </Menu> 
        
      </div>
    )
}

export default Navbar
