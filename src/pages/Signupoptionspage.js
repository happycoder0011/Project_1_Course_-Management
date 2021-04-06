import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import * as ROUTES from './../routes';
import { Link, Route } from 'react-router-dom'

export default function Signupoptionspage() {
    return (
        <div>
            <Container  style={{marginTop:"100px"}}>
               <Link to={ROUTES.STUDENTLECTURERSIGNUP}> <Button size="massive" basic>Sign Up For Student Lecturer</Button></Link>
               <Link to={ROUTES.STUDENTSIGNUP}><Button size="massive" basic>Sign Up For Student</Button></Link>
            </Container>
        </div>
    )
}
