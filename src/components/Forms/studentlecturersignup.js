import React,{useState} from 'react'
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react'
import './studentsignup.css';
import db, { register } from '../../firebase';
import * as ROUTES from './../../routes';
import { useHistory } from "react-router-dom";

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

export default function Studentlecturersignup() {
    let history = useHistory();
       const [registerdata,setRegisterdata] = useState({
           email:'',
           password:''
       }) 

       const [studentlecturerdata,setStudentlecturerdata]  = useState({
           studentname:'',
           id:'',
           phonenumber:'',
           gpa:'',
           coursecode:'',
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
            history.push(ROUTES.THANKYOU)
           }
           catch (error) {
                alert(error)
           }
       }
     
       const registeruser = (uid) => {
           
           db.collection('Student Lecturer').doc(uid).set({
               email:registerdata.email,
               studentname:studentlecturerdata.studentname,
               id:studentlecturerdata.id,
               phonenumber:studentlecturerdata.phonenumber,
               gpa:studentlecturerdata.gpa,
               coursecode:studentlecturerdata.coursecode,
               major:studentlecturerdata.major,
               institute:studentlecturerdata.institute,
               recommendation:false,
               selected:false
           })
//incomplete
           db.collection("Student").get()
           .then((docsnapshot) => {
               console.log(docsnapshot);
           })

       }
        
    return (
        <div>
            <Header as="h1">Sign Up For Student Lecturer</Header>
            <Grid>
                <Grid.Column width={8} className="Studentsignup__form">
                <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input fluid  onChange={(e) => setRegisterdata({...registerdata,email: e.target.value})} placeholder='Email' />
                <Form.Input fluid  placeholder='Full name' onChange={(e) => setStudentlecturerdata({...studentlecturerdata,studentname: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Password' onChange={(e) => setRegisterdata({...registerdata,password: e.target.value})} />
                <Form.Input fluid  placeholder='ID' onChange={(e) => setStudentlecturerdata({...studentlecturerdata,id: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Confirm Password' />
                <Form.Input fluid  placeholder='Phone Number' onChange={(e) => setStudentlecturerdata({...studentlecturerdata,phonenumber: e.target.value})}/>
                </Form.Group>
                
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='GPA' onChange={(e) => setStudentlecturerdata({...studentlecturerdata,gpa: e.target.value})}/>
                <Form.Input fluid  placeholder="Write the course code" onChange={(e) => setStudentlecturerdata({...studentlecturerdata,coursecode: e.target.value})} />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Select
                             fluid
                             label='Educational Institution'
                             options={institute}
                             placeholder='Enter'
                             onChange={(e,data) => setStudentlecturerdata({...studentlecturerdata,institute: data.value})}
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setStudentlecturerdata({...studentlecturerdata,major: data.value})}
                 />
                
                </Form.Group> 
                <Button size="large" primary>Sign Up</Button>
                </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                <Header as="h3">Conditions for joining the program</Header>
                <Container textAlign="left" className="Studentsignup__terms">
                    <ol>
                        <li>The obligation to attend.</li>
                        <li>Not to voilate public morals regulations.</li>
                        <li>Follow the instructions and regulations of the education sector in jubail.</li>
                        <li>Atleast 14 hours must be given</li>
                        <li>The student's GPA must be 2.75 and above</li>
                        <li>The student grade for applying for course B or above.</li>
                        <li>All the Information received is correct.</li>
                    </ol>
                </Container>
                <Checkbox label='Agree' required />
                </Grid.Column>
            </Grid>
       
        </div>
    )
}
