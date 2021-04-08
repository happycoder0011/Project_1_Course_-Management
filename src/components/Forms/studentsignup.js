import React,{useState} from 'react'
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react'
import db, { register } from '../../firebase';
import * as ROUTES from './../../routes';
import { useHistory } from "react-router-dom";
import './studentsignup.css';
import {major,institute} from "./../../options";

export default function Studentsignup() {
    let history = useHistory();
       const [registerdata,setRegisterdata] = useState({
           email:'',
           password:''
       }) 

       const [studentdata,setStudentdata]  = useState({
           studentname:'',
           id:'',
           phonenumber:'',
           major:'',
           institute:''
       })

       const handleSubmit = async(e) =>{
           e.preventDefault();
           console.log(registerdata.email);
           try{
            const user =  await register(registerdata);
           // console.log(user.uid)
            
            alert("registered successfully")
            
            registeruser(user.uid);
            history.push(ROUTES.HOME)
           }
           catch (error) {
                alert(error)
           }
       }
     
       const registeruser = (uid) => {
           
           db.collection('Student').doc(uid).set({
               email:registerdata.email,
               studentname:studentdata.studentname,
               id:studentdata.id,
               phonenumber:studentdata.phonenumber,
               major:studentdata.major,
               institute:studentdata.institute
           })

       }
    return (
        <div>
            <Header as="h1">Sign Up For Student</Header>
            <Grid>
                <Grid.Row>
                <Grid.Column widescreen={8} mobile={16} tablet={16} className="Studentsignup__form">
                <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input fluid onChange={(e) => setRegisterdata({...registerdata,email: e.target.value})} placeholder='Email' />
                <Form.Input fluid  placeholder='Student name' onChange={(e) => setStudentdata({...studentdata,studentname: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid onChange={(e) => setRegisterdata({...registerdata,password: e.target.value})} placeholder='Password' />
                <Form.Input fluid  placeholder='ID' onChange={(e) => setStudentdata({...studentdata,id: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Confirm Password' />
                <Form.Input fluid  placeholder='Phone Number' onChange={(e) => setStudentdata({...studentdata,phonenumber: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Select
                             fluid
                             label='Educational Institution'
                             options={institute}
                             placeholder='Enter'
                             onChange={(e,data) => setStudentdata({...studentdata,institute: data.value})}
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setStudentdata({...studentdata,major: data.value})}
                 />
                
                </Form.Group> 
                <Button size="large" type='submit' primary>Sign Up</Button>
                </Form>
                </Grid.Column>
                <div>&nbsp;</div>
                <Grid.Column widescreen={8} tablet={16} mobile={16}>
                <Header as="h3">Conditions for joining the program</Header>
                <Container textAlign="left" className="Studentsignup__terms">
                    <ol>
                        <li>The obligation to attend.</li>
                        <li>Not to voilate public morals regulations.</li>
                        <li>Follow the instructions and regulations of the education sector in jubail.</li>
                        <li>Absence is counted and the student will be banned from the program if the permitted hours are 3 hours only.</li>
                    </ol>
                </Container>
                <Checkbox checked label='Agree' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
    )
}
