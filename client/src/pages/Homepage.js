import React from 'react'
import Formlogin from '../components/Forms/Formlogin';
import home from './../images/home.png';
import { Container,Image } from 'semantic-ui-react'
{/*This is the landing page on the site. It contains the display image and user login form */}


function Homepage() {
    return (
        <div>
        <div>
        <Container fluid>
        <Image src={home}  className="Navbar__mainimage"/>
        </Container>
        </div>
        
        <Formlogin/>
        </div>
    )
}

export default Homepage
