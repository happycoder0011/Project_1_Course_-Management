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
  const [check,setCheck] = useState(false)
  useEffect(() => {
    
   if(localStorage.getItem('uid'))
   setCheck(true)
    
  }, [])
   const handleclick = () => {
     logout();
     localStorage.clear();
     setCheck(false)
   }
    return (
        <div>
        <Menu  >
        <Container>
            <Image src={logo}  />
        
            <h1 className="Navbar__heading">Registration for additional courses lesson</h1>
            <Menu.Item position="right">
           <Link to={ROUTES.SIGNUPOPTIONS}> <Button content='Sign up' secondary  /></Link>
           { check && <Link to={ROUTES.HOME}> <Button content='Sign Out' secondary onClick={handleclick} /></Link>}
           {!check && 
           <Link to={ROUTES.HOME}> <Button content='Login' secondary  /></Link>}        
           </Menu.Item>    
        </Container>
        </Menu> 
        
      </div>
    )
}

export default Navbar
