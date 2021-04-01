import React from 'react'
import { Container,Divider,Header,Icon,Image } from 'semantic-ui-react'
import "./Footer.css";
import logo from "./../../images/logo.png";

function Footer() {
    return (
        <div className="Footer__div" >
            <Container as="div" className="Footer__container">
                <Divider/>
                <Header floated="left">
                    Connect with us
                <Header.Subheader icon>
                <Icon name='envelope' />
                       alasmdm@ucj.edu.sa
                </Header.Subheader>
                </Header>
                All rights reserved@2021
                <Header floated="right">
                نص بسيط. يمكن تغيير هذا 
                    <Image src={logo} avatar/>
                </Header>
                

            </Container>
        </div>
    )
}

export default Footer
