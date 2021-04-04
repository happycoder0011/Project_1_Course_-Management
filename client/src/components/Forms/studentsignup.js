import React,{useState} from 'react'
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react'
import db, { register } from '../../firebase';
import * as ROUTES from './../../routes';
import { useHistory } from "react-router-dom";
import './studentsignup.css';

const major = [
    { key: 'MIS', text: 'MIS', value: 'MIS' },
    { key: 'BA', text: 'Business Administration', value: 'Business Administration' },
    { key: 'CS', text: 'Computer Science', value: 'Computer Science' },
    { key: 'CE', text: 'Civil Engineering', value: 'Civil Engineering' },
    { key: 'ME', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
    { key: 'IT', text: 'Information Technology', value: 'Information Technology' },
    { key: 'CET', text: 'Chemical Engineering Technology', value: 'Chemical Engineering Technology' },
    { key: 'SIT', text: 'Skill of IT', value: 'Skill of IT' },
    { key: 'spm', text: 'Skill of precision machinery and control', value: 'Skill of precision machinery and control' },
  ]
const institute = [
    { key: 'JUC', text: 'JUC', value: 'JUC' },
    { key: 'JIC', text: 'JIC', value: 'JIC' },
    { key: 'JTI', text: 'JTI', value: 'JTI' },
  ]

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
            console.log(user.uid)
            
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
//incomplete
           db.collection("Student").get()
           .then((docsnapshot) => {
               console.log(docsnapshot);
           })

       }
    return (
        <div>
            <Header as="h1">Sign Up For Student</Header>
            <Grid>
                <Grid.Column width={8} className="Studentsignup__form">
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
                             onChange={(e,data) => setRegisterdata({...registerdata,institute: data.value})}
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setRegisterdata({...registerdata,major: data.value})}
                 />
                
                </Form.Group> 
                <Button size="large" type='submit' primary>Sign Up</Button>
                </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                <Header as="h3">Conditions for joining the program</Header>
                <Container textAlign="left" className="Studentsignup__terms">
                    <ol>
                        <li>The obligation to attend.</li>
                        <li>Not to voilate public morals regulations.</li>
                        <li>Follow the instructions and regulations of the education sector in jubail.</li>
                        <li>Absence is counted and the student will be banned from the program if the permitted hours are 3 hours only.</li>
                    </ol>
                </Container>
                <Checkbox label='Agree' />
                </Grid.Column>
            </Grid>
       
        </div>
    )
}
