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

function Navbar() {
   const [logstatus,setLogstatus] = useState(false);
   useEffect(() => {
     
    const user = localStorage.getItem("user")
    if(user)
    setLogstatus(true);
    else
    setLogstatus(false);
   
   }, [])
  

   const handleclick = () => {
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
           {logstatus && <Link to={ROUTES.HOME}> <Button content='Sign Out' secondary onClick={handleclick} /></Link>}
           
           </Menu.Item>    
        </Container>
        </Menu> 
        
      </div>
    )
}

export default Navbar
