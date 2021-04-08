import React from 'react'
import { Container,Divider,Header,Icon,Image } from 'semantic-ui-react'
import "./Footer.css";
import footerimage from "./../../images/JUClogo.png";

function Footer() {
    return (
        <div className="Footer__div" >
            <Container as="div" className="Footer__container">
                <Divider/>
                <Header floated="left">
                    Connect with us
                <Header.Subheader icon>
                <Icon name='envelope' />
                       Naif.controller@gmail.com
                </Header.Subheader>
                </Header>
                All rights reserved@2021
                <Image src={footerimage} floated="right" size="small"/>

            </Container>
        </div>
    )
}

export default Footer
